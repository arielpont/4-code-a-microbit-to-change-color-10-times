for (let index = 0; index < 10; index++) {
    sb.setRgbLedColorRGB(sb.rgbLed(SBRgbLed.RgbLedA), 100, 0, 0)
    basic.pause(500)
    sb.setRgbLedColorRGB(sb.rgbLed(SBRgbLed.RgbLedA), 0, 0, 100)
    basic.pause(500)
}
sb.setRgbLedColorRGB(sb.rgbLed(SBRgbLed.RgbLedA), 0, 0, 0)
