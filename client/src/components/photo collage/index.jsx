import React from "react";

const Photos = () => {
  return (
    <section>
      {/* Photo collage starting */}
      <div class="row g-0">
        <div class="col-lg-6 col-sm-2 col-12">
          <div class="gallery-box-layout1 has-animation">
            <img
              loading="lazy"
              decoding="async"
              width="1920"
              height="100"
              src="assets/building.jpg"
              class="attachment-full size-full"
              alt=""
              srcset="assets/building.jpg 1920w, assets/building.jpg 600w, assets/building.jpg 1024w, assets/building.jpg 768w, assets/building.jpg 1536w"
              sizes="(max-width: 1920px) 100vw, 1920px"
            />{" "}
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 col-12">
          <div class="gallery-box-layout1 has-animation">
            <img
              loading="lazy"
              decoding="async"
              width="960"
              height="900"
              src="assets/class.jpg"
              class="attachment-full size-full"
              alt=""
              srcset="assets/class.jpg 960w, assets/class.jpg 600w, assets/class.jpg 768w"
              sizes="(max-width: 960px) 100vw, 960px"
            />{" "}
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 col-12">
          <div class="gallery-box-layout1 has-animation">
            <img
              loading="lazy"
              decoding="async"
              width="960"
              height="900"
              src="assets/graduation.jpg"
              class="attachment-full size-full"
              alt=""
              srcset="assets/graduation.jpg 960w, assets/graduation.jpg 600w, assets/graduation.jpg 768w"
              sizes="(max-width: 960px) 100vw, 960px"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;
