export const variant = {
    hidden: { opacity: 0, y: -25 },
    visible: {
        opacity: 1, y: 0,
    },
    inOut: {
        opacity: [.8, 0], y: [-15, 0],
        transition: {duration:1.5}
    }
}