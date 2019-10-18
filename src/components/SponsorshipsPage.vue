<template>
    <article class="l-main">
        <img class="sponsorships-logo l-main__image" src="../../static/sponsorships.svg" />
        <section class="form">
            <h1>DAdvertise on our weekly mail publication and be heared by a community in love with what it does</h1>
            <div class="intro-subscribe">
                <p>People from all around the world reads our publication, and they love it. The readers are mostly product designers, creative ones working as freelances, researches as user experience designers and front-end developers.</p>
                <button class="btn" margin-bottom-2>Reserve your slot</button>
            </div>
            <ul class="features">
                <li class="features__item">
                    <span>
                        <img src="../assets/images/icon-article.svg" />
                    </span>
                    <p>Subscribers<span font-bold>>1000</span></p>
                </li>
                <li class="features__item">
                    <span>
                        <img src="../assets/images/icon-save.svg" />
                    </span>
                    <p>Open Click Rate
                    <span font-bold>Aprox. 34% & 12%</span></p>
                </li>
                <li class="features__item">
                    <span>
                        <img src="../assets/images/icon-tool.svg" />
                    </span>
                    <p>Roles
                    <span font-bold>Designers & Devs</span></p>
                </li>
                <li class="features__item">
                    <span>
                        <img src="../assets/images/icon-love.svg" />
                    </span>
                    <p>Publication Date
                    <span font-bold>Every Tuesday</span></p>
                </li>
            </ul>
            <h2>Feel free to choose the most convenient way to advertise your product, services or even post a job if you are looking for talent 😍</h2>
            <section class="card" margin-top>
                <span>
                    <img src="../assets/images/icon-love.svg" />
                </span>
                <h4>Main Sponsor</h4>
            </section>
            <p>
                Ideal for promoting your product, services, agencies, campaigns, promotions, looking for investors, general branding or even an open position in your dream company!
                <br />
                <br />It will appear in the middle of the newsletter.
            </p>
            <section class="box"></section>
            <p>
                <span font-bold>Specifications:</span> 820x400px @72dpi, clickable image.
            </p>
            <section class="box"></section>
            <p>
                <span font-bold>Specifications:</span>820x400px @72dpi, clickable image.
            </p>
            <p>You only need to reserve your slot by making the purchase and filling some basic information, we will contact you as soon as posible to verify all the information!</p>
            <button class="btn" margin-bottom-2>Reserve your slot</button>

            <!-- MicroAds -->
            <section class="card" margin-top>
                <span>
                    <img src="../assets/images/icon-love.svg" />
                </span>
                <h4>Micro Ad</h4>
            </section>
            <p>
                Perfect for announcements, discount and promotions, coupon codes and getting leads!
                <br />
                <br />We offer two slots weekly. It will be just above the job of the week section.
            </p>
            <section class="box"></section>
            <p>
                <span font-bold>Specifications:</span>820x400px @72dpi, clickable image.
            </p>
            <button class="btn" margin-bottom-2>Reserve your slot</button>
            <!-- Job of the week -->
            <section class="card" margin-top>
                <span>
                    <img src="../assets/images/icon-love.svg" />
                </span>
                <h4>Job of the week</h4>
            </section>
            <p>
                Recruiting for your big project? The majority are from Spain, so jobs in there, Europe or remote ones are ideal.
                <br />
                <br />One job offer each week and appears in the footer.
            </p>
            <section class="box"></section>
            <p>
                <span font-bold>Specifications:</span>820x400px @72dpi, clickable image.
            </p>
            <button class="btn" margin-bottom-2>Reserve your slot</button>
        </section>
    </article>
</template>
<script>
import SubscribeItem from './SubscribeItem';

export default {
    name: 'SponsorshipsPage',
    components: {
        SubscribeItem,
    },
};
</script>
