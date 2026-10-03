export function EonLogo() {
    const mainColor = '#F8FAFC';
    const blueAccent = '#1683FF';
    const storeColor = '#94A3B8';
    const bgColor = '#030712';

    // Helper for STORE geometric vector letters (Height 18px, Stroke 3px)
    const createStoreLetter = (letter) => {
        const sColor = storeColor;
        const stroke = '3px';
        const h = '18px';

        if (letter === 'S') {
            return {
                type: 'div',
                props: {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '13px',
                        height: h,
                        justifyContent: 'space-between',
                    },
                    children: [
                        { type: 'div', props: { style: { width: '13px', height: stroke, backgroundColor: sColor } } },
                        { type: 'div', props: { style: { width: stroke, height: '5px', backgroundColor: sColor } } },
                        { type: 'div', props: { style: { width: '13px', height: stroke, backgroundColor: sColor } } },
                        { type: 'div', props: { style: { width: stroke, height: '5px', backgroundColor: sColor, alignSelf: 'flex-end' } } },
                        { type: 'div', props: { style: { width: '13px', height: stroke, backgroundColor: sColor } } },
                    ],
                },
            };
        }
        if (letter === 'T') {
            return {
                type: 'div',
                props: {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '15px',
                        height: h,
                    },
                    children: [
                        { type: 'div', props: { style: { width: '15px', height: stroke, backgroundColor: sColor } } },
                        { type: 'div', props: { style: { width: stroke, height: '15px', backgroundColor: sColor } } },
                    ],
                },
            };
        }
        if (letter === 'O') {
            return {
                type: 'div',
                props: {
                    style: {
                        width: '15px',
                        height: h,
                        borderRadius: '3px',
                        border: `${stroke} solid ${sColor}`,
                        boxSizing: 'border-box',
                    },
                },
            };
        }
        if (letter === 'R') {
            return {
                type: 'div',
                props: {
                    style: {
                        display: 'flex',
                        width: '14px',
                        height: h,
                        position: 'relative',
                    },
                    children: [
                        { type: 'div', props: { style: { width: stroke, height: h, backgroundColor: sColor } } },
                        {
                            type: 'div',
                            props: {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '11px',
                                    height: '10px',
                                    justifyContent: 'space-between',
                                },
                                children: [
                                    { type: 'div', props: { style: { width: '11px', height: stroke, backgroundColor: sColor } } },
                                    { type: 'div', props: { style: { width: stroke, height: '4px', backgroundColor: sColor, alignSelf: 'flex-end' } } },
                                    { type: 'div', props: { style: { width: '11px', height: stroke, backgroundColor: sColor } } },
                                ],
                            },
                        },
                        {
                            type: 'div',
                            props: {
                                style: {
                                    position: 'absolute',
                                    right: '1px',
                                    bottom: '0px',
                                    width: stroke,
                                    height: '9px',
                                    backgroundColor: sColor,
                                    transform: 'rotate(-28deg)',
                                    transformOrigin: 'top right',
                                },
                            },
                        },
                    ],
                },
            };
        }
        if (letter === 'E') {
            return {
                type: 'div',
                props: {
                    style: {
                        display: 'flex',
                        width: '13px',
                        height: h,
                        position: 'relative',
                    },
                    children: [
                        { type: 'div', props: { style: { width: stroke, height: h, backgroundColor: sColor } } },
                        {
                            type: 'div',
                            props: {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '10px',
                                    height: h,
                                    justifyContent: 'space-between',
                                },
                                children: [
                                    { type: 'div', props: { style: { width: '10px', height: stroke, backgroundColor: sColor } } },
                                    { type: 'div', props: { style: { width: '7px', height: stroke, backgroundColor: sColor } } },
                                    { type: 'div', props: { style: { width: '10px', height: stroke, backgroundColor: sColor } } },
                                ],
                            },
                        },
                    ],
                },
            };
        }
        return null;
    };

    return {
        type: 'div',
        props: {
            style: {
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bgColor,
            },
            children: [
                // Brand Container
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        children: [
                            // Main "EON" Geometric Wordmark Row
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '36px',
                                    },
                                    children: [
                                        // Custom Geometric Letter "E" (Elongated & Architectural)
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    width: '115px',
                                                    height: '90px',
                                                    position: 'relative',
                                                },
                                                children: [
                                                    // Vertical Spine
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                width: '16px',
                                                                height: '90px',
                                                                backgroundColor: mainColor,
                                                            },
                                                        },
                                                    },
                                                    // Horizontal Arms Container
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'space-between',
                                                                width: '99px',
                                                                height: '90px',
                                                            },
                                                            children: [
                                                                // Top Arm (wide with sleek angled corner cut)
                                                                {
                                                                    type: 'div',
                                                                    props: {
                                                                        style: {
                                                                            width: '99px',
                                                                            height: '16px',
                                                                            backgroundColor: mainColor,
                                                                            borderTopRightRadius: '8px',
                                                                        },
                                                                    },
                                                                },
                                                                // Middle Arm (architectural & recessed)
                                                                {
                                                                    type: 'div',
                                                                    props: {
                                                                        style: {
                                                                            width: '72px',
                                                                            height: '14px',
                                                                            backgroundColor: mainColor,
                                                                        },
                                                                    },
                                                                },
                                                                // Bottom Arm (wide with sleek angled corner cut)
                                                                {
                                                                    type: 'div',
                                                                    props: {
                                                                        style: {
                                                                            width: '99px',
                                                                            height: '16px',
                                                                            backgroundColor: mainColor,
                                                                            borderBottomRightRadius: '8px',
                                                                        },
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },

                                        // Custom Geometric Letter "O" with Signature Electric Blue Slash
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '160px',
                                                    height: '90px',
                                                    position: 'relative',
                                                },
                                                children: [
                                                    // Outer White Oval Ring (Horizontal ratio)
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                width: '160px',
                                                                height: '90px',
                                                                borderRadius: '45px',
                                                                border: `16px solid ${mainColor}`,
                                                                boxSizing: 'border-box',
                                                                position: 'absolute',
                                                            },
                                                        },
                                                    },
                                                    // Black-Hole Negative Space
                                                    // This replaces the straight slash with a curved gravitational/accretion silhouette.
                                                    {
                                                        type: 'svg',
                                                        props: {
                                                            width: '190',
                                                            height: '90',
                                                            viewBox: '0 0 190 90',
                                                            style: {
                                                                position: 'absolute',
                                                                left: '-15px',
                                                                top: '0px',
                                                                overflow: 'visible',
                                                                transform: 'rotate(-32deg)',
                                                            },
                                                            children: [
                                                                {
                                                                    type: 'path',
                                                                    props: {
                                                                        fill: bgColor,
                                                                        d: `
                        M 8 18
                        C 28 2, 57 -2, 79 8
                        C 91 14, 98 23, 101 32
                        C 105 44, 102 57, 94 66
                        C 84 78, 69 84, 53 82
                        C 37 80, 24 71, 17 61
                        C 31 66, 45 67, 57 62
                        C 68 58, 76 50, 78 41
                        C 80 31, 76 23, 68 18
                        C 57 11, 43 10, 31 14
                        C 22 17, 14 22, 8 29
                        Z
                    `,
                                                                    },
                                                                },
                                                                {
                                                                    type: 'path',
                                                                    props: {
                                                                        fill: bgColor,
                                                                        d: `
                        M 182 72
                        C 162 88, 133 92, 111 82
                        C 99 76, 92 67, 89 58
                        C 85 46, 88 33, 96 24
                        C 106 12, 121 6, 137 8
                        C 153 10, 166 19, 173 29
                        C 159 24, 145 23, 133 28
                        C 122 32, 114 40, 112 49
                        C 110 59, 114 67, 122 72
                        C 133 79, 147 80, 159 76
                        C 168 73, 176 68, 182 61
                        Z
                    `,
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },

                                        // Custom Geometric Letter "N" — exact vector geometry
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    width: '115px',
                                                    height: '90px',
                                                    position: 'relative',
                                                },
                                                children: [
                                                    // Left vertical stem
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                position: 'absolute',
                                                                left: '0px',
                                                                top: '0px',
                                                                width: '16px',
                                                                height: '90px',
                                                                backgroundColor: mainColor,
                                                            },
                                                        },
                                                    },

                                                    // Exact diagonal stroke:
                                                    // runs from upper-left to lower-right.
                                                    // This is deliberately a polygon rather than a rotated/skewed rectangle.
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                position: 'absolute',
                                                                left: '0px',
                                                                top: '0px',
                                                                width: '115px',
                                                                height: '90px',
                                                                backgroundColor: mainColor,
                                                                clipPath: 'polygon(10.12px 5.42px, 93.12px 95.42px, 104.88px 84.58px, 21.88px -5.42px)',
                                                            },
                                                        },
                                                    },

                                                    // Right vertical stem
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                position: 'absolute',
                                                                right: '0px',
                                                                top: '0px',
                                                                width: '16px',
                                                                height: '90px',
                                                                backgroundColor: mainColor,
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },

                            // Geometric "STORE" Subtitle (Centered, Widely Tracked)
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '28px',
                                        marginTop: '45px',
                                    },
                                    children: [
                                        createStoreLetter('S'),
                                        createStoreLetter('T'),
                                        createStoreLetter('O'),
                                        createStoreLetter('R'),
                                        createStoreLetter('E'),
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    };
}




