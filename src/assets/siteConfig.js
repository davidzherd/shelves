export const colors = {
    bg: "#FFF5E4",
    light: "#DDC9B4",
    khaki: "#BCAC9B",
    navi: "#2A3D45",
    rose: "#C17C74",
    lightGreen: "#C1D8C3",
    darkGreen: "#6A9C89",
    orange: "#FFB534",
};
export const colorsV2 = {
    bg: "hsl(220, 50%, 98%)",
    white: "hsl(150, 25%, 98%)",
    gray:"hsl(150, 10%, 96%)",
    navi:"hsl(193, 26%, 28%)",
    darkNavi:"hsl(195, 37%, 16%)",
    lightNavi:"hsl(195, 16%, 48%)",
    textLight:"hsl(196, 38%, 35%)",
    textDark:"hsl(196, 38%, 15%)",
    shadow:"hsl(210, 1%, 75%)",
    accentBlue:"hsl(193, 46%, 96%)",
    accentPink:"hsl(9, 49%, 67%)"
}

export function formatPrice(number) {
    return `${number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}