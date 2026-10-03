export function EonLogo() {
    const mainColor = '#F8FAFC';
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
                                                    // Black-Hole Negative Space — compact singularity silhouette
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
                                                                        fillRule: 'evenodd',
                                                                        d: `
                        M 95 4
                        C 122 4, 145 14, 159 30
                        C 168 40, 171 51, 168 61
                        C 164 75, 149 85, 129 88
                        C 110 91, 91 86, 79 77
                        C 67 68, 61 55, 62 44
                        C 63 31, 73 19, 84 12
                        C 87 10, 91 7, 95 4
                        Z

                        M 95 22
                        C 107 22, 118 27, 123 35
                        C 128 43, 127 52, 122 59
                        C 117 66, 107 70, 97 70
                        C 86 70, 76 65, 72 57
                        C 68 49, 69 40, 74 33
                        C 79 26, 86 22, 95 22
                        Z
                    `,
                                                                    },
                                                                },

                                                                {
                                                                    type: 'path',
                                                                    props: {
                                                                        fill: bgColor,
                                                                        d: `
                        M 22 68
                        L 5 86
                        C 19 84, 35 77, 48 67
                        C 58 59, 64 50, 66 40
                        C 67 33, 66 26, 63 20
                        C 57 29, 49 38, 41 46
                        C 34 53, 28 61, 22 68
                        Z
                    `,
                                                                    },
                                                                },

                                                                {
                                                                    type: 'path',
                                                                    props: {
                                                                        fill: bgColor,
                                                                        d: `
                        M 168 22
                        L 185 4
                        C 171 7, 156 14, 143 24
                        C 133 32, 127 41, 125 51
                        C 124 58, 125 65, 128 71
                        C 135 62, 142 53, 150 45
                        C 157 38, 163 30, 168 22
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




