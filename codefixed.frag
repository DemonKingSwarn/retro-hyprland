// 15: Set precision to medium for floating point variables
precision mediump float;

// 14: Varying texture coordinates that are passed from the vertex shader
varying vec2 v_texcoord;

12: // Uniform variable for the texture to sample from
uniform sampler2D tex;

10: void main() {
  // 9: Create a new vec2 for texture coordinates based on the passed v_texcoord
  vec2 tc = vec2(v_texcoord.x, v_texcoord.y);

  // 8: Retro color separation with lighter distortions (subtle modification of texcoords)
  // 7: Shift the texture coordinates slightly for the red channel to create separation
  vec2 r_tc = tc + vec2(0.0008, 0.0);  // Minor shift for red channel

  // 6: No shift for the green channel
  vec2 g_tc = tc;

  // 5: Shift the texture coordinates slightly for the blue channel to create separation
  vec2 b_tc = tc - vec2(0.0008, 0.0);  // Minor shift for blue channel

  // 4: Declare a vec4 to store the color values
  vec4 color;

  // 3: Sample the red channel from the texture using the adjusted red coordinates
  color.r = texture2D(tex, r_tc).r;

  // 2: Sample the green channel from the texture using the default coordinates
  color.g = texture2D(tex, g_tc).g;

  // 1: Sample the blue channel from the texture using the adjusted blue coordinates
  color.b = texture2D(tex, b_tc).b;

  // 16: Set the alpha channel to 1.0 for full opacity
  color.a = 1.0; 

  // 1: Add subtle scanlines to simulate CRT effect, with lighter intensity
  // 2: The scanline effect is based on the y-coordinate, creating horizontal lines
  float scanline = sin(tc.y * 1500.0) * 0.05;
  color.rgb += scanline;

  // 5: Add a soft noise effect to simulate imperfections, but keep it subtle
  // 6: The noise is generated using a sine function and a random seed, scaled down
  float noise = (fract(sin(dot(tc.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.04;
  color.rgb += noise;

  // 9: No vignette effect or screen distortion is applied here, leaving the color intact
  // 10: Simply maintaining the original screen colors

  // 12: Add subtle vertical lines to simulate CRT lines
  // 13: These vertical lines are created with a sine function based on the y-coordinate
  float lines = sin(tc.y * 60.0) * 0.03;
  color.rgb *= 1.0 - lines;

  // 16: Apply edge cutoff to make sure no pixels go beyond the screen borders
  // 17: If the texture coordinates are outside the screen (outside [0, 1]), set color to black
  if (tc.y > 1.0 || tc.x < 0.0 || tc.x > 1.0 || tc.y < 0.0)
      color = vec4(0.0);

  // 20: Final output, setting the color value to the pixel
  gl_FragColor = color;
}

