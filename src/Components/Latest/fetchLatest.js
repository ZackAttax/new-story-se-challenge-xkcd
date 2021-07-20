export const fetchLatest = (
    fetch("https://xkcd.vercel.app/?comic=latest")
        .then(res => res.json())
        .then((result) => {
            setState({
                img: result.img,
                alt: result.alt,
                title: result.title
            })
        })
)