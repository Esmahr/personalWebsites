import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main>
    <div class="design position-absolute float-end"></div>
    <app-navbar></app-navbar>
    <section class="landing" id="profile">
        <div class="container">
            <div class="row ">
                <div class="col-5 article">
                    <h1 class="web-title">Backend <br> Developer</h1>
                    <h1 class="mobile-title">Backend Developer</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate id inventore excepturi quia
                        quae iure ipsum? Tempora, recusandae, aliquid quasi, distinctio voluptates totam libero ipsum
                        natus tenetur voluptatum sed voluptate!
                        Tenetur quo unde dolorum nobis natus inventore quis sint itaque ipsum. Odio consectetur nemo
                        illum necessitatibus! Ratione, cum nam suscipit facilis dignissimos beatae explicabo quibusdam
                        mollitia quas dolorum deserunt ad.</p>
                </div>
                <div class="col-6 right d-flex">
                    <div class="image"><img src="../../assets/profil.jpg"></div>
                    <div class="statistic">
                        <div class="info">
                            <ul class="p-0 mb-1 text-start">
                                <li>
                                    <div class="title">4+</div>
                                    <div class="description">yıl deneyim</div>
                                </li>
                                <li>
                                    <div class="title">43+</div>
                                    <div class="description">tamamlanan proje</div>
                                </li>
                                <li>
                                    <div class="title">284+</div>
                                    <div class="description">commit</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <app-known-technologies></app-known-technologies>
    </section>
    <section class="projects mt-5 pt-5 text-center">
        <app-project-summary></app-project-summary>
    </section>
    <section class="blogs mt-5 pt-5 text-center">
        <app-blog-summary></app-blog-summary>
    </section>
</main>

  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


}
