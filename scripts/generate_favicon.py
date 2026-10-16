from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

def generate_icons():
    # Design at 512x512 master resolution
    SIZE = 512
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 1. Rounded rectangle background with deep forest green gradient
    # Radius ~ 112px (standard iOS/macOS squircle ratio ~22%)
    radius = 112
    
    # Create mask for rounded square
    mask = Image.new("L", (SIZE, SIZE), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, SIZE, SIZE], radius=radius, fill=255)

    # Gradient fill
    grad = Image.new("RGBA", (SIZE, SIZE), (16, 42, 34, 255))
    grad_draw = ImageDraw.Draw(grad)
    for y in range(SIZE):
        ratio = y / SIZE
        r = int(18 * (1 - ratio) + 10 * ratio)
        g = int(50 * (1 - ratio) + 24 * ratio)
        b = int(40 * (1 - ratio) + 20 * ratio)
        grad_draw.line([(0, y), (SIZE, y)], fill=(r, g, b, 255))

    # Add soft warm radial glow from center
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([80, 80, 432, 432], fill=(212, 175, 110, 35))
    glow = glow.filter(ImageFilter.GaussianBlur(60))
    grad = Image.alpha_composite(grad, glow)

    # Apply rounded mask
    img.paste(grad, (0, 0), mask)
    draw = ImageDraw.Draw(img)

    # 2. Antique gold luxury hairline inner border
    inset = 18
    draw.rounded_rectangle(
        [inset, inset, SIZE - inset, SIZE - inset],
        radius=radius - inset,
        outline=(212, 175, 110, 160),
        width=5
    )

    # Secondary ultra-thin accent border
    inset2 = 28
    draw.rounded_rectangle(
        [inset2, inset2, SIZE - inset2, SIZE - inset2],
        radius=radius - inset2,
        outline=(176, 141, 87, 70),
        width=2
    )

    # 3. Monogram "J" in Georgia Bold serif
    font_serif_path = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
    font_j = ImageFont.truetype(font_serif_path, 330)

    # Measure exact text dimensions
    bbox = draw.textbbox((0, 0), "J", font=font_j)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]

    # Center horizontally and vertically with slight optical baseline adjustment
    tx = (SIZE - tw) // 2 - bbox[0] - 8
    ty = (SIZE - th) // 2 - bbox[1] - 12

    # Draw soft drop shadow for the letter
    shadow_offset = 6
    draw.text((tx, ty + shadow_offset), "J", fill=(0, 0, 0, 120), font=font_j)

    # Draw main serif "J" in lustrous antique gold
    draw.text((tx, ty), "J", fill=(244, 228, 193, 255), font=font_j)

    # 4. Small decorative emerald accent dot on the top right
    dot_x = tx + tw + 18
    dot_y = ty + 42
    dot_r = 12
    # Outer ring
    draw.ellipse([dot_x - dot_r - 3, dot_y - dot_r - 3, dot_x + dot_r + 3, dot_y + dot_r + 3], outline=(212, 175, 110, 200), width=3)
    # Glowing emerald dot
    draw.ellipse([dot_x - dot_r, dot_y - dot_r, dot_x + dot_r, dot_y + dot_r], fill=(62, 196, 129, 255))

    # Save master 512x512
    img.save("public/icon-512.png", "PNG", optimize=True)
    img.save("public/icon.png", "PNG", optimize=True)
    img.save("app/icon.png", "PNG", optimize=True)

    # 180x180 for Apple Touch Icon
    apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save("public/apple-touch-icon.png", "PNG", optimize=True)
    apple_icon.save("app/apple-icon.png", "PNG", optimize=True)

    # Multi-size ICO file for app/favicon.ico and public/favicon.ico (16, 32, 48)
    sizes = [(16, 16), (32, 32), (48, 48)]
    ico_images = [img.resize(s, Image.Resampling.LANCZOS) for s in sizes]
    ico_images[0].save(
        "app/favicon.ico",
        format="ICO",
        sizes=sizes,
        append_images=ico_images[1:]
    )
    ico_images[0].save(
        "public/favicon.ico",
        format="ICO",
        sizes=sizes,
        append_images=ico_images[1:]
    )

    print("Successfully generated all browser tab icons & favicons!")

if __name__ == "__main__":
    generate_icons()
