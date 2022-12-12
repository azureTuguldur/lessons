
        const colors = ["red" ,"green" ,"blue"];
        let colorIndex = 0;
        const div = document.getElementsByTagName("div")[0];
        const change = () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            console.log("Color", red);
            console.log("Color", green);
            console.log("Color", blue);
            document.getElementsByTagName(
                "div"
            )[0].style.backgroundColor = `rgb(${red},${green},${blue})`;
        };
        btn.addEventListener("click", change);