import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps
import os

def create_og_image():
    # 2x supersampling for razor sharp anti-aliasing
    SCALE = 2
    W = 1200 * SCALE
    H = 630 * SCALE

    # Fonts
    font_bold_path = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
    font_reg_path = "/System/Library/Fonts/Supplemental/Georgia.ttf"
    font_sans_path = "scripts/fonts/DMSans.ttf"

    font_eyebrow = ImageFont.truetype(font_sans_path, 15 * SCALE)
    font_title = ImageFont.truetype(font_bold_path, 60 * SCALE)
    font_subtitle = ImageFont.truetype(font_sans_path, 21 * SCALE)
    font_tag = ImageFont.truetype(font_sans_path, 16 * SCALE)
    font_meta = ImageFont.truetype(font_sans_path, 16 * SCALE)
    font_domain = ImageFont.truetype(font_sans_path, 20 * SCALE)
    font_badge = ImageFont.truetype(font_sans_path, 14 * SCALE)

    # 1. Base image with radial/linear dark forest gradient
    base = Image.new("RGBA", (W, H), (12, 28, 22, 255))
    draw = ImageDraw.Draw(base)

    # Draw gradient rows
    for y in range(H):
        ratio = y / H
        # Deep forest to darker forest
        r = int(18 * (1 - ratio) + 9 * ratio)
        g = int(48 * (1 - ratio) + 24 * ratio)
        b = int(38 * (1 - ratio) + 19 * ratio)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Add soft ambient radial glow at top-left and around portrait
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    # Top-left subtle warm glow
    glow_draw.ellipse([(-100 * SCALE, -100 * SCALE), (600 * SCALE, 500 * SCALE)], fill=(176, 141, 87, 18))
    # Portrait ambient glow
    glow_draw.ellipse([(800 * SCALE, 100 * SCALE), (1300 * SCALE, 600 * SCALE)], fill=(24, 70, 56, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(80 * SCALE))
    base = Image.alpha_composite(base, glow)
    draw = ImageDraw.Draw(base)

    # 2. Outer & Inner hairline borders
    inset = 30 * SCALE
    border_color = (197, 160, 89, 70) # antique gold subtle
    draw.rectangle([inset, inset, W - inset, H - inset], outline=border_color, width=1 * SCALE)

    # Corner brackets (luxury editorial touch)
    bracket_len = 25 * SCALE
    bracket_color = (212, 175, 110, 180) # bright antique gold
    bw = 2 * SCALE

    # Top-left
    draw.line([(inset - 2 * SCALE, inset), (inset + bracket_len, inset)], fill=bracket_color, width=bw)
    draw.line([(inset, inset - 2 * SCALE), (inset, inset + bracket_len)], fill=bracket_color, width=bw)
    # Top-right
    draw.line([(W - inset - bracket_len, inset), (W - inset + 2 * SCALE, inset)], fill=bracket_color, width=bw)
    draw.line([(W - inset, inset - 2 * SCALE), (W - inset, inset + bracket_len)], fill=bracket_color, width=bw)
    # Bottom-left
    draw.line([(inset - 2 * SCALE, H - inset), (inset + bracket_len, H - inset)], fill=bracket_color, width=bw)
    draw.line([(inset, H - inset - bracket_len), (inset, H - inset + 2 * SCALE)], fill=bracket_color, width=bw)
    # Bottom-right
    draw.line([(W - inset - bracket_len, H - inset), (W - inset + 2 * SCALE, H - inset)], fill=bracket_color, width=bw)
    draw.line([(W - inset, H - inset - bracket_len), (W - inset, H - inset + 2 * SCALE)], fill=bracket_color, width=bw)

    # 3. Portrait image on the right
    portrait_path = "public/images/jeevan-paul.png"
    if os.path.exists(portrait_path):
        portrait = Image.open(portrait_path).convert("RGBA")
        p_size = 360 * SCALE
        portrait = portrait.resize((p_size, p_size), Image.Resampling.LANCZOS)

        # Circular mask with antialiasing
        mask = Image.new("L", (p_size, p_size), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.ellipse((0, 0, p_size, p_size), fill=255)

        # Create composite
        px = W - inset - p_size - 50 * SCALE
        py = (H - p_size) // 2 - 10 * SCALE

        # Background disc & shadow for portrait
        shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow)
        shadow_draw.ellipse([px - 10 * SCALE, py - 5 * SCALE, px + p_size + 10 * SCALE, py + p_size + 15 * SCALE], fill=(0, 0, 0, 130))
        shadow = shadow.filter(ImageFilter.GaussianBlur(15 * SCALE))
        base = Image.alpha_composite(base, shadow)
        draw = ImageDraw.Draw(base)

        # Draw outer decorative gold ring
        ring_offset = 8 * SCALE
        draw.ellipse([px - ring_offset, py - ring_offset, px + p_size + ring_offset, py + p_size + ring_offset], outline=(197, 160, 89, 140), width=2 * SCALE)

        # Paste circular portrait
        base.paste(portrait, (px, py), mask)

        # Inner gold border ring
        draw.ellipse([px, py, px + p_size, py + p_size], outline=(212, 175, 110, 230), width=3 * SCALE)

        # Floating badge below portrait
        badge_text = "AI Engineer · Trivexa Technologies"
        bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
        bw_text = bbox[2] - bbox[0]
        bh_text = bbox[3] - bbox[1]
        badge_w = bw_text + 32 * SCALE
        badge_h = bh_text + 16 * SCALE
        badge_x = px + (p_size - badge_w) // 2
        badge_y = py + p_size - 20 * SCALE

        # Draw badge pill
        draw.rounded_rectangle([badge_x, badge_y, badge_x + badge_w, badge_y + badge_h], radius=badge_h // 2, fill=(16, 42, 34, 240), outline=(212, 175, 110, 200), width=1 * SCALE)
        # Small green dot
        dot_r = 4 * SCALE
        dot_x = badge_x + 14 * SCALE
        dot_y = badge_y + badge_h // 2
        draw.ellipse([dot_x - dot_r, dot_y - dot_r, dot_x + dot_r, dot_y + dot_r], fill=(62, 196, 129, 255))
        draw.text((badge_x + 26 * SCALE, badge_y + 8 * SCALE), badge_text, fill=(251, 248, 241, 255), font=font_badge)

    # 4. Left Column: Text & Editorial Typography
    lx = inset + 55 * SCALE
    curr_y = inset + 55 * SCALE

    # Eyebrow Tag Pill
    eyebrow_text = "PRODUCTION GENERATIVE & AGENTIC AI"
    bbox = draw.textbbox((0, 0), eyebrow_text, font=font_eyebrow)
    eb_w = bbox[2] - bbox[0] + 28 * SCALE
    eb_h = bbox[3] - bbox[1] + 14 * SCALE
    draw.rounded_rectangle([lx, curr_y, lx + eb_w, curr_y + eb_h], radius=eb_h // 2, fill=(22, 54, 43, 200), outline=(197, 160, 89, 130), width=1 * SCALE)
    draw.text((lx + 14 * SCALE, curr_y + 7 * SCALE), eyebrow_text, fill=(212, 175, 110, 255), font=font_eyebrow)

    curr_y += eb_h + 20 * SCALE

    # Main Title: Jeevan Bandanadham
    draw.text((lx, curr_y), "Jeevan Bandanadham", fill=(251, 248, 241, 255), font=font_title)
    curr_y += 76 * SCALE

    # Subtitle / Core Role
    sub1 = "AI Engineer  |  Agentic AI  |  LangGraph  |  Python Backend"
    draw.text((lx, curr_y), sub1, fill=(214, 222, 217, 240), font=font_subtitle)
    curr_y += 38 * SCALE

    # Divider line
    draw.line([(lx, curr_y), (lx + 580 * SCALE, curr_y)], fill=(197, 160, 89, 60), width=1 * SCALE)
    curr_y += 24 * SCALE

    # 4 Key Production Pills / Architecture Badges
    pills_row1 = [
        "LangGraph Multi-Agent",
        "Hybrid RAG (BM25 + ChromaDB)",
    ]
    pills_row2 = [
        "Apple App Store (WorldTrendz)",
        "Deep Research OS (Anveshan)",
    ]

    pill_y = curr_y
    ph = 34 * SCALE

    # Row 1
    rx = lx
    for ptext in pills_row1:
        bbox = draw.textbbox((0, 0), ptext, font=font_tag)
        pw = bbox[2] - bbox[0] + 36 * SCALE
        draw.rounded_rectangle([rx, pill_y, rx + pw, pill_y + ph], radius=7 * SCALE, fill=(18, 44, 35, 210), outline=(197, 160, 89, 100), width=1 * SCALE)
        # Vector gold diamond
        cx = rx + 16 * SCALE
        cy = pill_y + ph // 2
        dr = 4 * SCALE
        draw.polygon([(cx, cy - dr), (cx + dr, cy), (cx, cy + dr), (cx - dr, cy)], fill=(212, 175, 110, 255))
        draw.text((rx + 28 * SCALE, pill_y + 8 * SCALE), ptext, fill=(244, 240, 230, 240), font=font_tag)
        rx += pw + 14 * SCALE

    # Row 2
    pill_y += ph + 12 * SCALE
    rx = lx
    for ptext in pills_row2:
        bbox = draw.textbbox((0, 0), ptext, font=font_tag)
        pw = bbox[2] - bbox[0] + 36 * SCALE
        draw.rounded_rectangle([rx, pill_y, rx + pw, pill_y + ph], radius=7 * SCALE, fill=(18, 44, 35, 210), outline=(197, 160, 89, 100), width=1 * SCALE)
        # Vector gold diamond
        cx = rx + 16 * SCALE
        cy = pill_y + ph // 2
        dr = 4 * SCALE
        draw.polygon([(cx, cy - dr), (cx + dr, cy), (cx, cy + dr), (cx - dr, cy)], fill=(212, 175, 110, 255))
        draw.text((rx + 28 * SCALE, pill_y + 8 * SCALE), ptext, fill=(244, 240, 230, 240), font=font_tag)
        rx += pw + 14 * SCALE

    # 5. Bottom Brand & Verification Bar
    bot_y = H - inset - 52 * SCALE

    # Domain brand
    domain_text = "thejeevan.in"
    # Live indicator dot
    draw.ellipse([lx, bot_y + 6 * SCALE, lx + 10 * SCALE, bot_y + 16 * SCALE], fill=(62, 196, 129, 255))
    draw.text((lx + 18 * SCALE, bot_y), domain_text, fill=(251, 248, 241, 255), font=font_domain)

    # Pipe separator
    sep_x = lx + 18 * SCALE + 140 * SCALE
    draw.line([(sep_x, bot_y + 4 * SCALE), (sep_x, bot_y + 24 * SCALE)], fill=(197, 160, 89, 100), width=1 * SCALE)

    # Verification tags
    cred_text = "LangChain Academy Certified  ·  Anthropic Verified  ·  Hugging Face Agents"
    draw.text((sep_x + 18 * SCALE, bot_y + 3 * SCALE), cred_text, fill=(176, 188, 180, 220), font=font_meta)

    # Downsample with Lanczos to exact 1200x630
    final_img = base.resize((1200, 630), Image.Resampling.LANCZOS)
    
    # Save to both locations:
    # 1. public/og-image.png (standard static asset)
    # 2. app/opengraph-image.png (Next.js App Router automated convention)
    final_img.save("public/og-image.png", "PNG", optimize=True)
    final_img.save("app/opengraph-image.png", "PNG", optimize=True)
    print("Successfully generated public/og-image.png and app/opengraph-image.png (1200x630)")

if __name__ == "__main__":
    create_og_image()
