import '../css/section02.css';

const Section02 = () => {
    return (
        <section className="Business">
            <h2><span className="mainColor">OUR</span> BUSINESS</h2>
            <p>여러분과 새로운 미래를 향해 달려갑니다</p>
            <div className="container">
                <figure>
                    <div className="inbox">
                        <img src="../img/hd01.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, excepturi?</p>
                        <a href="">자세히보기......</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="../img/hd02.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 2</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, excepturi?</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="../img/hd03.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 3</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, excepturi?</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="../img/hd04.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 4</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, excepturi?</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
            </div>
            <div className="inner">
                <div className="tit">
                    <strong>심플하지만 다 갖춘 태서경.</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam quos velit?</p>
                </div>
                <div className="list">
                    <ul className="dotList">
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, excepturi? Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Ut, excepturi?</li>
                        <li>doloremque fuga eaque mollitia.</li>
                        <li>consequatur commodi quam aperiam.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section02;