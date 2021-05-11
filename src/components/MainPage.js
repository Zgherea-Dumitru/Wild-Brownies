import "./styles/MainPage.css";

export default function MainPage() {
    return (
        <section className="solar-system">
            <div className="planet neptune">
                <div className="img-planet img-neptune"></div>

                <div className="planet uranus">
                    <div className="img-planet img-uranus"></div>

                    <div className="planet saturn">
                        <div className="img-planet img-saturn"></div>

                        <div className="planet jupiter">
                            <div className="img-planet img-jupiter"></div>

                            <div className="planet mars">
                                <div className="img-planet img-mars"></div>

                                <div className="planet earth">
                                    <div className="img-planet img-earth"></div>

                                    <div className="planet venus">
                                        <div className="img-planet img-venus"></div>

                                        <div className="planet mercury">
                                            <div className="img-planet img-mercury"></div>

                                            <div className="sun">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}