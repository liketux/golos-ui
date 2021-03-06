import React, { PureComponent } from 'react';

export default class WhatIsGolos extends PureComponent {
    render() {
        return (
            <section className="WhatIsGolos text-center" id="what-is-golos">
                <div className="row">
                    <div className="small-12 medium-12 large-centered columns columns WhatIsGolos__video">
                        <h1>
                            Golos.id — это блог-платформа, построенная на медиаблокчейне Голос.
                        </h1>
                        <div>
                            <iframe
                                width="853"
                                height="480"
                                src="https://www.youtube.com/embed/8a0TPACOu2k"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
                <div className="row WhatIsGolos__action">
                    <div className="small-12 columns">
                        <p>
                            Платформа начала работу в октябре 2016 года. <br />
                            Изначально блокчейн Голос был создан по лицензии от
                            STEEM.inc и рассчитан, в основном, на русскоязычное
                            сообщество. В процессе роста и развития появилось
                            множество различных нововведений, и сейчас Golos.id
                            - это проект со своей структурой, экономикой и
                            правилами, география которого постоянно расширяется.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
