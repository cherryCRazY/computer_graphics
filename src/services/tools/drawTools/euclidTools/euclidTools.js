export const findDistance = (p0, p1) => {
    const dx = p1.x - p0.x,
        dy = p1.y - p0.y;
    return Math.sqrt(dx * dx + dy * dy);
};

export const inRadius = (p0, p1, distance) => {
    return findDistance(p0, p1) - distance <= 0;
};
