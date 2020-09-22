<template>
<div>
    <v-app id="inspire">
        <Navbar />
        <!-- About Start -->
        <section id="about" class="about">

            <div class="container">
                <div class="row ">
                    <div class="col-md-7">
                        <div class="about-contain">
                            <div>
                                <h2 class="title">about the <span>Link</span></h2>
                                <p class="caption-about">
                                    Link Development is a global technology solutions provider leading the digitalization of private and public sectors.
                                    <br />
                                    We drive the business transformation of our customers by delivering integrated, inventive and digitally productive experiences that blend cloud, analytics, mobility, smart services, Dynamics 365 - CRM, infrastructure, IOT, augmented reality and others.
                                    <br />
                                    We help our customer take the digital leap from strategy to realization. We provide digital strategy and roadmap consultancy; build immersive, exciting customer experiences; create business transformation platforms and deliver sustainable business optimization solutions.
                                    <br />
                                    Along the customer’s business journey; we consult, develop, customize, implement, integrate, R&D, host, support and provide onshore/offshore, high-quality solutions that induce a young, new productive spirit for customers and their stakeholders.
                                    <br />
                                    We grow thanks to our leadership and teams of crafty minds who envision business, navigate the digital world and create an open link to the digital of today and tomorrow. We progress with the ability of every certified expert to uptake challenging missions, think as one unit, and deliver straightforward solutions that inspire.
                                    <br />
                                    We believe that the primary role of technology is to create a digitally productive world. Therefore, we are driven by a passion to build solutions, initiatives and programs that digitally empower, connect and transform the lives of employees, students, citizens, entrepreneurs and other stakeholders in the IT community at large.
                                    <br />
                                    We are also a multi-award winner with our +20 years of expertise, +600 professionals and thousands of successful engagements across different industries such as Governments, Real-Estate, Healthcare, Telecom, Finance & Banking, Aviation and Education.
                                    <br />
                                    We are partners with leading software solutions providers around the globe to provide our customers with an even more comprehensive portfolio of offerings. Our partners list include: Microsoft, K2, AvePoint, Informatica, esri, OutSystems, Nintex, verba, Aquia, Sitecore, Unite4, IdeaScale, RealDolmen, ODC, Sonus, proMX, Veeam and Dell.
                                    <br />
                                </p>
                                <!-- <div class="row sm-mb">
                  <div class="col-6">
                    <ul class="about-style">
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>Easy customize</h3>
                        </div>
                      </li>
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>easy to use</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul class="about-style">
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>Nice Design</h3>
                        </div>
                      </li>
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3>SEO Friendly</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> -->

                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 d-medium-none">
                        <div class="about-right">
                            <div class="about-phone">
                                <p>
                                    See also
                                    <br />
                                    Leadership Team <br />

                                    Customers <br />

                                    Partners <br />

                                    Awards <br />

                                    Testimonials <br />

                                    Case Studies

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About End -->
        <Footer />
    </v-app>
</div>
</template>

<script>
export default {
    name: 'about',
    components: {
        Navbar: () => import('@/components/Navbar'),
        Footer: () => import('@/components/Footer')
    },
}
</script>
