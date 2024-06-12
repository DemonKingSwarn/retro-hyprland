# Retro Hyprland

Retro Hyprland is a shader which mimics the look and feel of the old cathode tube screens. It has been designed to be eye-candy, customizable, and reasonably lightweight.

## Showcase

![](./retro.gif)

[Unixporn link](https://www.reddit.com/r/unixporn/comments/1de0b58/oc_retro_hyprland_a_hyprland_shader_which_mimics/)

## Installation and Enabling the Shader

Just download the `retro.frag` file and put it somewhere desirable.

You can enable the shader using the following command:

```sh
hyprctl keyword decoration:screen_shader '~/.config/hypr/shaders/retro.frag'
```

To disable it, do this:

```sh
hyprctl keyword decoration:screen_shader ''
```
