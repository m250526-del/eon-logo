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
                                                    // Dark Cutout Slot (cutting clean gaps through white O ring)
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                width: '190px',
                                                                height: '24px',
                                                                backgroundColor: bgColor,
                                                                position: 'absolute',
                                                                transform: 'rotate(-32deg)',
                                                            },
                                                        },
                                                    },
                                                    // Signature Electric Blue Diagonal Slash (#1683FF)
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                width: '185px',
                                                                height: '14px',
                                                                backgroundColor: blueAccent,
                                                                position: 'absolute',
                                                                transform: 'rotate(-32deg)',
                                                                borderRadius: '2px',
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                        },

                                        // Custom Geometric Letter "N" (Architectural & Clean Geometry)
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
                                                    // Left Vertical Stem
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                width: '16px',
                                                                height: '90px',
                                                                backgroundColor: mainColor,
                                                                position: 'absolute',
                                                                left: '0px',
                                                                top: '0px',
                                                            },
                                                        },
                                                    },
                                                    // Clean Diagonal Connection (Top-Left 0..26px to Bottom-Right 89..115px)
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                width: '26px',
                                                                height: '90px',
                                                                backgroundColor: mainColor,
                                                                position: 'absolute',
                                                                left: '0px',
                                                                top: '0px',
                                                                transform: 'skewX(-44.66deg)',
                                                                transformOrigin: '0 0',
                                                            },
                                                        },
                                                    },
                                                    // Right Vertical Stem
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                width: '16px',
                                                                height: '90px',
                                                                backgroundColor: mainColor,
                                                                position: 'absolute',
                                                                right: '0px',
                                                                top: '0px',
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




