import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

import { SOCIAL_IMAGE_SIZE } from "./social-metadata";

const COLORS = {
  maroon: "#611512",
  beige: "#FCD6B4",
  orange: "#D68340",
  dark: "#310D0B",
};

type SocialCard =
  | {
      kind: "company";
    }
  | {
      kind: "film";
      title: string;
      role: string;
      imageSrc: string;
    }
  | {
      kind: "team";
      title: string;
      role: string;
      imageSrc: string;
    };

async function loadLocalImage(publicPath: string): Promise<string> {
  if (
    !publicPath.startsWith("/") ||
    publicPath.includes("..") ||
    publicPath.includes("\\")
  ) {
    throw new Error("Invalid local social image path");
  }

  const extension = extname(publicPath).toLowerCase();

  const mimeTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
  };

  const mime = mimeTypes[extension];

  if (!mime) {
    throw new Error(`Unsupported image format: ${extension}`);
  }

  const file = await readFile(
    join(process.cwd(), "public", publicPath.slice(1)),
  );

  return `data:${mime};base64,${file.toString("base64")}`;
}

export async function renderSocialCard(card: SocialCard) {
  const aquifer = await readFile(join(process.cwd(), "src/fonts/Aquifer.ttf"));

  // Optional local Manrope font.
  const manrope = await readFile(
    join(process.cwd(), "src/fonts/Manrope-SemiBold.ttf"),
  ).catch(() => null);

  const fonts = [
    {
      name: "Aquifer",
      data: aquifer,
      weight: 400 as const,
      style: "normal" as const,
    },
    ...(manrope
      ? [
          {
            name: "Manrope",
            data: manrope,
            weight: 600 as const,
            style: "normal" as const,
          },
        ]
      : []),
  ];

  const bodyFont = manrope ? "Manrope" : "sans-serif";

  const image =
    card.kind === "company" ? null : await loadLocalImage(card.imageSrc);

  const isTeam = card.kind === "team";

  const background = isTeam ? COLORS.beige : COLORS.maroon;

  const foreground = isTeam ? COLORS.maroon : COLORS.beige;

  return new ImageResponse(
    card.kind === "company" ? (
      // COMPANY CARD
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 60,
          backgroundColor: COLORS.maroon,
          color: COLORS.beige,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: bodyFont,
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          <span>NINETY 4 FILM</span>
          <span style={{ color: COLORS.orange }}>CAIRO / EGYPT</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Aquifer",
            fontSize: 88,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          <span>IDEAS ARE</span>
          <span>ONLY THE</span>
          <span>
            BEGINNING
            <span style={{ color: COLORS.orange }}>.</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: bodyFont,
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 65,
              height: 4,
              backgroundColor: COLORS.orange,
            }}
          />

          <span>FILM & TELEVISION PRODUCTION</span>
        </div>
      </div>
    ) : (
      // FILM / TEAM CARD
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: background,
          color: foreground,
        }}
      >
        {/* LEFT TEXT PANEL */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 755,
            height: "100%",
            padding: 55,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: bodyFont,
              fontSize: 19,
              letterSpacing: 2.5,
            }}
          >
            <span>NINETY 4 FILM</span>

            <span
              style={{
                marginTop: 12,
                color: isTeam ? COLORS.maroon : COLORS.orange,
                fontSize: 16,
              }}
            >
              {isTeam ? "MEET THE TEAM" : "SELECTED PRODUCTIONS"}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 645,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Aquifer",
                fontSize:
                  card.title.length > 19
                    ? 61
                    : card.title.length > 11
                      ? 75
                      : 104,
                lineHeight: 1.07,
                letterSpacing: -1.5,
                overflowWrap: "break-word",
              }}
            >
              {card.title.toUpperCase()}
              <span style={{ color: COLORS.orange }}>.</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 26,
                width: 55,
                height: 3,
                backgroundColor: COLORS.orange,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: bodyFont,
              fontSize: 18,
              lineHeight: 1.4,
              letterSpacing: 1,
            }}
          >
            <span>{card.role.toUpperCase()}</span>
            <span
              style={{
                marginTop: 12,
                fontSize: 15,
                opacity: 0.7,
              }}
            >
              NINETY4FILM.COM
            </span>
          </div>
        </div>

        {/* RIGHT ARTWORK PANEL */}
        <div
          style={{
            display: "flex",
            width: 445,
            height: 630,
            padding: isTeam ? 0 : 25,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: isTeam ? COLORS.maroon : COLORS.dark,
          }}
        >
          {/* ImageResponse uses native img elements. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image ?? ""}
            alt=""
            width={445}
            height={630}
            style={{
              width: "100%",
              height: "100%",
              objectFit: isTeam ? "cover" : "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    ),
    {
      ...SOCIAL_IMAGE_SIZE,
      fonts,
      headers: {
        "Cache-Control": "public, max-age=86400",
      },
    },
  );
}
