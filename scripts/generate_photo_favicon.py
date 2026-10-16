import os
from PIL import Image, ImageDraw, ImageFilter, ImageOps
import base64

def generate_photo_favicon():
    portrait_path = "public/images/jeevan-paul.png"
    if not os.path.exists(portrait_path):
        print("Error: portrait not found")
        return

    src = Image.open(portrait_path).convert("RGBA")
    w, h = src.size

    # Focus crop around face:
    # In a 500x500 headshot, center is x=250. Face is around y=80..380
    crop_size = min(w, h)
    # Slight upward optical bias so head/face is perfectly centered
    top_offset = int((h - crop_size) * 0.3)
    crop_box = (
        (w - crop_size) // 2,
        top_offset,
        (w + crop_size) // 2,
        top_offset + crop_size
    )
    cropped = src.crop(crop_box)

    # Master resolution 512x512
    SIZE = 512
    cropped = cropped.resize((SIZE, SIZE), Image.Resampling.LANCZOS)

    # Circular mask with smooth anti-aliased edges
    mask = Image.new("L", (SIZE * 2, SIZE * 2), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse([8, 8, SIZE * 2 - 8, SIZE * 2 - 8], fill=255)
    mask = mask.resize((SIZE, SIZE), Image.Resampling.LANCZOS)

    # Create composite
    out = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    out.paste(cropped, (0, 0), mask)

    # Add antique gold circular border ring
    border = Image.new("RGBA", (SIZE * 2, SIZE * 2), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(border)
    # Double ring: outer hairline + inner gold ring
    b_draw.ellipse([10, 10, SIZE * 2 - 10, SIZE * 2 - 10], outline=(212, 175, 110, 240), width=12)
    b_draw.ellipse([22, 22, SIZE * 2 - 22, SIZE * 2 - 22], outline=(176, 141, 87, 120), width=6)
    border = border.resize((SIZE, SIZE), Image.Resampling.LANCZOS)

    final_icon = Image.alpha_composite(out, border)

    # Save to public directory
    final_icon.save("public/icon.png", "PNG", optimize=True)
    final_icon.save("public/icon-512.png", "PNG", optimize=True)

    # Apple touch icon 180x180 (iOS likes opaque background)
    apple_bg = Image.new("RGBA", (180, 180), (16, 42, 34, 255))
    apple_img = final_icon.resize((180, 180), Image.Resampling.LANCZOS)
    apple_bg.paste(apple_img, (0, 0), apple_img)
    apple_bg.save("public/apple-touch-icon.png", "PNG", optimize=True)

    # Multi-resolution favicon.ico
    sizes = [(16, 16), (32, 32), (48, 48)]
    ico_images = [final_icon.resize(s, Image.Resampling.LANCZOS) for s in sizes]
    ico_images[0].save(
        "public/favicon.ico",
        format="ICO",
        sizes=sizes,
        append_images=ico_images[1:]
    )

    # Also generate public/icon.svg with embedded base64 circular image
    buffered = open("public/icon.png", "rb").read()
    b64_img = base64.b64encode(buffered).decode("utf-8")
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <clipPath id="circleClip">
      <circle cx="256" cy="256" r="250" />
    </clipPath>
  </defs>
  <circle cx="256" cy="256" r="254" fill="#102A23" />
  <image href="data:image/png;base64,{b64_img}" x="0" y="0" width="512" height="512" clip-path="url(#circleClip)" />
  <circle cx="256" cy="256" r="250" fill="none" stroke="#D4AF6E" stroke-width="8" stroke-opacity="0.9" />
</svg>'''
    with open("public/icon.svg", "w") as f:
        f.write(svg_content)

    print("Successfully generated portrait photo favicon suite in public/")

if __name__ == "__main__":
    generate_photo_favicon()
