export function EonLogo() {
    // 4-point cosmic starburst SVG path (curved concave tips)
    const starPath = 'M 50 0 Q 50 50 100 50 Q 50 50 50 100 Q 50 50 0 50 Q 50 50 50 0 Z';

    const createStarSvg = (size, color, opacity = 1) => ({
        type: 'svg',
        props: {
            width: size,
            height: size,
            viewBox: '0 0 100 100',
            fill: 'none',
            style: {
                display: 'flex',
            },
            children: [
                {
                    type: 'path',
                    props: {
                        d: starPath,
                        fill: color,
                        opacity: opacity,
                    },
                },
            ],
        },
    });

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
                backgroundColor: '#030712',
                position: 'relative',
            },
            children: [
                // Center Brand Wrapper
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                        },
                        children: [
                            // Main Typography Row: "EON"
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                    },
                                    children: [
                                        // Accent 1: Bright star floating near bottom left of "E"
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    position: 'absolute',
                                                    left: '-38px',
                                                    bottom: '12px',
                                                    display: 'flex',
                                                },
                                                children: [createStarSvg(30, '#F8FAFC', 0.9)],
                                            },
                                        },
                                        // Letter "E"
                                        {
                                            type: 'span',
                                            props: {
                                                style: {
                                                    fontFamily: 'Cinzel',
                                                    fontSize: '130px',
                                                    color: '#F8FAFC',
                                                    letterSpacing: '0.1em',
                                                    lineHeight: 1,
                                                },
                                                children: 'E',
                                            },
                                        },
                                        // Letter "O" with central cosmic starburst
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                },
                                                children: [
                                                    {
                                                        type: 'span',
                                                        props: {
                                                            style: {
                                                                fontFamily: 'Cinzel',
                                                                fontSize: '130px',
                                                                color: '#F8FAFC',
                                                                letterSpacing: '0.1em',
                                                                lineHeight: 1,
                                                            },
                                                            children: 'O',
                                                        },
                                                    },
                                                    // Starburst overlaid directly over central axis of "O"
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                position: 'absolute',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                top: 0,
                                                                left: 0,
                                                                right: '0.1em', // compensate letterSpacing on span
                                                                bottom: 0,
                                                            },
                                                            children: [createStarSvg(52, '#F8FAFC', 1)],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                        // Letter "N"
                                        {
                                            type: 'span',
                                            props: {
                                                style: {
                                                    fontFamily: 'Cinzel',
                                                    fontSize: '130px',
                                                    color: '#F8FAFC',
                                                    letterSpacing: '0.1em',
                                                    lineHeight: 1,
                                                },
                                                children: 'N',
                                            },
                                        },
                                        // Accent 2: Cyan star floating near top right of "N"
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    position: 'absolute',
                                                    right: '-28px',
                                                    top: '8px',
                                                    display: 'flex',
                                                },
                                                children: [createStarSvg(22, '#38BDF8', 0.95)],
                                            },
                                        },
                                    ],
                                },
                            },
                            // Subtitle Typography: "STORE"
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontFamily: 'Cinzel',
                                        fontSize: '26px',
                                        color: '#94A3B8',
                                        letterSpacing: '0.45em',
                                        marginTop: '28px',
                                        paddingLeft: '0.45em', // Visually center due to trailing letterSpacing
                                    },
                                    children: 'STORE',
                                },
                            },
                        ],
                    },
                },
            ],
        },
    };
}