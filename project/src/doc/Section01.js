import '../css/main.css';

const Section01 = () => {
    return (
        <section className="about basicSection">
            <h2><span className="mainColor">CEO'S</span> GREETINGS</h2>
            <p>여러분과 새로운 미래를 향해 달려갑니다</p>
            <div className="container">
                <div className="des">
                    <p className="tit">웹서비스의<span className="mainColor"> 새로운 미래를</span><br />
                        <span className="mainColor">제가</span> 만들어 가겠습니다.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum facere aliquam ipsum!<br />
                        corporis fugiat dolorum saepe a, repudiandae iste accusantium officiis officia unde.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia ex tempore,<br />
                        accusamus voluptatem aperiam nesciunt doloremque repudiandae, inventore eius harum <br />
                        perspiciatis! Iure, recusandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, neque?<br />Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Nemo, aspernatur.</p>

                    <p>태서경 드림</p>
                </div>
                <figure>
                    <img src="../img/hd01.jpg" alt="" />
                </figure>
            </div>
            <div className="inner">
                <h3>주요현황</h3>
                <div className="responstive_table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>주 소</th>
                                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>051-000-0000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Section01;