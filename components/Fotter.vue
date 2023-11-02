<template>
    <div>
        <img src="@/assets/logo.png" alt="logo" class="logo">
        <img src="@/assets/tcu_yc.jpg" alt="background" class="footer-cover">
        <footer>
            <div>
                <h2>Contact us</h2>
                <ul>
                    <li>Instagram</li>
                    <li>X</li>
                    <li>Facebook</li>
                    <li>linkedIn</li>
                </ul>
            </div>
            <div>
                <h3>関研究室 -Information Security lab-</h3>
                <ul>
                    <li>seki@tcu.ac.jp</li>
                    <li>+090-5506-5656</li>
                    <li>www.comm.tcu.ac.jp/seki-ken</li>
                </ul>
                <h4>東京都市大学 横浜キャンパス</h4>
                <p>メディア情報学部 情報システム学科<br>
                    デザインデータ科学部 デザインデータ科学科</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #42539B;
        color: white;
        padding: 2rem;
    }
    footer div {
        width: 50%;
    }
    footer div h2 {
        font-size: 2rem;
        font-family: Noto Sans JP, monospace;
        font-weight: bold;
        line-height: 1;
    }
    footer div h3 {
        font-size: 1.5rem;
        font-family: Noto Sans JP, monospace;
        font-weight: bold;
        line-height: 1;
    }
    footer div h4 {
        font-size: 1rem;
        font-family: Noto Sans JP, monospace;
        font-weight: bold;
        line-height: 1;
    }
    footer div ul {
        list-style: none;
        padding: 0;
    }
    footer div ul li {
        margin: 0.5rem 0;
    }
    footer div p {
        font-size: 0.8rem;
    }
    .logo {
        width: 10rem;
        object-fit: cover;
    }
    .footer-cover {
        width: 100%;
        object-fit: cover;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    @media screen and (max-width: 768px) {
        footer {
            flex-direction: column;
        }
        footer div {
            width: 100%;
        }
    }
</style>