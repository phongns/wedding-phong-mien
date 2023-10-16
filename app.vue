<script setup lang="ts">
import json from "@/types/data.json";
import { WeddingBlock } from "@/types";
const data = json as WeddingBlock;
const timesAddress: string[] = data.times.address.split('|');
useHead({
  title: 'Wedding Phong ♡ Miền'
})
</script>

<template>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Arima:wght@400;700&amp;family=Philosopher:wght@400;700&amp;family=Jura:wght@400;700&amp;display=swap"
        as="style" />
  <b-container>
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&amp;family=Jura:wght@400;700&amp;family=Philosopher:wght@400;700&amp;family=Arima:wght@400;700&amp;family=Athiti:wght@400;700&amp;family=Tinos:wght@400;700&amp;family=Thasadith:wght@400;700&amp;display=swap" as="style"> -->
    <div class="main-picture">
      <img :src="data.mainPicture" alt="ảnh cưới" loading="lazy" />
      <span class="bg-divider bg-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" class="divider" viewBox="0 0 1024 160" preserveAspectRatio="none">
          <g class="divider-g">
            <path class="divider-path divider-o4"
                  d="M0 182.086h1024V41.593c-28.058-21.504-60.109-37.581-97.075-37.581-112.845 0-198.144 93.798-289.792 93.798S437.658 6.777 351.846 6.777s-142.234 82.125-238.49 82.125c-63.078 0-75.776-31.744-113.357-53.658L0 182.086z"></path>
            <path class="divider-path divider-o3" d="M1024 181.062v-75.878c-39.731 15.872-80.794 27.341-117.658 25.805-110.387-4.506-191.795-109.773-325.53-116.224-109.158-5.12-344.166 120.115-429.466 166.298H1024v-.001z"></path>
            <path class="divider-path divider-o2" d="M0 182.086h1024V90.028C966.451 59.103 907.059 16.3 824.115 15.071 690.278 13.023 665.19 102.93 482.099 102.93S202.138-1.62 74.24.019C46.49.326 21.811 4.217 0 9.849v172.237z"></path>
            <path class="divider-path divider-o1" d="M0 182.086h1024V80.505c-37.171 19.558-80.691 35.328-139.571 36.25-151.142 2.355-141.619-28.57-298.496-29.184s-138.854 47.002-305.459 43.725C132.813 128.428 91.238 44.563 0 28.179v153.907z"></path>
            <path class="divider-path" d="M0 182.086h1024V80.505c-37.171 19.558-80.691 35.328-139.571 36.25-151.142 2.355-141.619-28.57-298.496-29.184s-138.854 47.002-305.459 43.725C132.813 128.428 91.238 44.563 0 28.179v153.907z"></path>
          </g>
        </svg>
      </span>
    </div>
  </b-container>
  <div class="info">
    <div class="d-flex">
      <div class="leaf"></div>
    </div>
    <b-container>
      <div class="info--couple d-flex justify-content-center text-center mb-5">
        <div class="w-50">{{ data.husbandName }}</div>
        <div class="w-50">{{ data.wifeName }}</div>
      </div>
      <div class="d-flex justify-content-center text-center info-family">
        <div class="w-50">
          <b class="text-uppercase">ông bà</b>
          <div>{{ data.husbandFamily.fatherName }}</div>
          <div>{{ data.husbandFamily.motherName }}</div>
          <div class="w-50 m-auto">{{ data.husbandFamily.address }}</div>
        </div>
        <div class="w-50">
          <b class="text-uppercase">ông bà</b>
          <div>{{ data.wifeFamily.fatherName }}</div>
          <div>{{ data.wifeFamily.motherName }}</div>
          <div class="w-50 m-auto">{{ data.wifeFamily.address }}</div>
        </div>
      </div>

      <div class="d-flex justify-content-center flex-column text-center mt-5">
        <div class="fs-26 mb-2 font-philosopher">
          <b class="font-arima">TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH</b>
        </div>
        <div class="font-arima fs-26 font-philosopher mb-4">ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI</div>
        <div class="font-jura mb-4" style="font-size: 27px;">Vào lúc {{ data.times.time }}</div>
        <div class="font-jura mb-4" style="font-size: 27px;">{{ data.times.dayOfWeek }}</div>
        <b class="font-jura mb-2" style="font-size: 45px;">{{ data.times.day }}</b>
        <div class="font-jura mb-4" style="font-size: 20px;">{{ data.times.lunar }}</div>

        <div class="" style="font-family: 'font-1'; font-size: 80px; line-height: 1.2;">
          <div>{{ timesAddress[0] }}</div>
          <div>{{ timesAddress[1] }}</div>
        </div>
      </div>
      <div class="mt-5 text-center font-philosopher" style="font-size: 32px;">Thời gian</div>
      <div class="timeline">
        <div class="timeline-row">
          <div class="timeline-time">
            <div class="px-3" style="font-family: 'font-2'; font-size: 24px;">{{ data.timeLine.welcome }}</div>
            <div class="px-3" style="font-family: 'font-3'; font-size: 40px;">Đón khách</div>
          </div>
          <div class="timeline-content align-items-end">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.72 89.62" x="0px" y="0px" preserveAspectRatio="none" width="100%" height="100%" class="" fill="rgba(44, 68, 33, 1.0)">
                <g data-name="Layer 2">
                  <g>
                    <path
                          d="M91.89,71.28v-49h2.27V14.77H91.35a8.88,8.88,0,1,0-13.28,0H75.26v7.54h2.27v5.58a47,47,0,0,0-16.48-8.49,10.82,10.82,0,0,0,1-4.43,7.43,7.43,0,0,0-7.6-7.6,7.59,7.59,0,0,0-6.1,3.07,7.59,7.59,0,0,0-6.1-3.07,7.43,7.43,0,0,0-7.6,7.6,10.8,10.8,0,0,0,1,4.36,46.94,46.94,0,0,0-16.45,8.33V22.31h2.27V14.77H18.65a8.88,8.88,0,1,0-13.28,0H2.56v7.54H4.83v49H0V89.62H24V71.28H19.19V41.65A37.19,37.19,0,0,1,43.06,27.93a37.32,37.32,0,0,0,4.59,3l.71.38.71-.38a37.15,37.15,0,0,0,4.54-3A37.18,37.18,0,0,1,77.53,42V71.28H72.7V89.62h24V71.28Zm-.73-52H78.26V17.77h12.9ZM78.82,8.88a5.88,5.88,0,1,1,5.88,5.88A5.89,5.89,0,0,1,78.82,8.88ZM18.46,19.31H5.56V17.77h12.9ZM6.12,8.88A5.88,5.88,0,1,1,12,14.77,5.89,5.89,0,0,1,6.12,8.88ZM3,86.62V80H21v6.64ZM21,74.28V77H3V74.28H21Zm-13.19-3v-49h8.36v49ZM19.19,37.06V31.58a43.94,43.94,0,0,1,18-9.55A23.55,23.55,0,0,0,40.1,25.4,40.3,40.3,0,0,0,19.19,37.06Zm29.17-9.18C45.87,26.4,37.66,21.05,37.66,15a4.4,4.4,0,0,1,4.6-4.6,4.61,4.61,0,0,1,4.6,4.6h3a4.61,4.61,0,0,1,4.6-4.6,4.4,4.4,0,0,1,4.6,4.6C59.06,21.05,50.85,26.4,48.36,27.89Zm8.2-2.43a23.64,23.64,0,0,0,2.94-3.36,43.94,43.94,0,0,1,18,9.74v5.53A40.26,40.26,0,0,0,56.56,25.45Zm24-3.14h8.36v49H80.53Zm-3,52H93.72V77h-18V74.28ZM75.7,86.62V80h18v6.64Z">
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="timeline-row"></div>
        <div class="timeline-row">
          <div class="timeline-time">
            <div class="px-3" style="font-family: 'font-2'; font-size: 24px;">{{ data.timeLine.talk }}</div>
            <div class="px-3" style="font-family: 'font-3'; font-size: 40px;">Làm lễ</div>
          </div>
          <div class="timeline-content align-items-end">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 96.38 96.38" enable-background="new 0 0 96.38 96.38" xml:space="preserve" preserveAspectRatio="none"
                   width="100%" height="100%" class="" fill="rgba(44, 68, 33, 1.0)">
                <path
                      d="M58.111,36c-3.675,0-7.093,1.118-9.935,3.028c-1.702-1.138-3.593-1.979-5.568-2.479l4.766-4.766  c0.076-0.076,0.132-0.164,0.174-0.258c0.011-0.026,0.014-0.055,0.022-0.083c0.024-0.073,0.042-0.147,0.045-0.224  c0-0.013,0.007-0.024,0.007-0.037c0-0.027-0.013-0.05-0.016-0.077c-0.006-0.066-0.017-0.13-0.039-0.194  c-0.015-0.043-0.032-0.082-0.054-0.121c-0.014-0.026-0.018-0.055-0.035-0.08l-2.835-4.252c-0.158-0.237-0.423-0.379-0.708-0.379  H32.6c-0.284,0-0.55,0.142-0.708,0.379l-2.835,4.252c-0.017,0.025-0.021,0.053-0.035,0.08c-0.021,0.04-0.039,0.078-0.054,0.121  c-0.022,0.064-0.033,0.128-0.039,0.194c-0.002,0.026-0.016,0.049-0.016,0.077c0,0.013,0.007,0.024,0.007,0.037  c0.003,0.077,0.021,0.151,0.045,0.224c0.009,0.027,0.011,0.057,0.022,0.083c0.042,0.094,0.098,0.182,0.174,0.258l4.768,4.768  c-7.925,1.956-13.521,8.995-13.521,17.308c0,9.847,8.012,17.858,17.859,17.858c3.677,0,7.096-1.118,9.939-3.031  c2.95,1.977,6.356,3.031,9.903,3.031c9.847,0,17.858-8.012,17.858-17.858C75.97,44.012,67.958,36,58.111,36z M46.728,40.111  c-0.492,0.408-0.956,0.847-1.401,1.305c-1.781-1.013-3.746-1.63-5.771-1.814l1.631-1.631C43.139,38.332,45.028,39.062,46.728,40.111  z M44.172,42.725c-2.446,3.056-3.919,6.924-3.919,11.134c0,4.056,1.401,7.964,3.939,11.131c-1.767,0.944-3.782,1.483-5.922,1.483  c-6.956,0-12.615-5.658-12.615-12.614s5.659-12.615,12.614-12.615C40.331,41.245,42.352,41.755,44.172,42.725z M43.482,27.781  l1.701,2.551h-3.467l-0.851-2.551H43.482z M41.716,32.033h3.003l-4.424,4.424c0,0-0.001,0-0.001,0.001l-0.079,0.079L41.716,32.033z   M37.464,27.781h1.608l0.851,2.551h-3.31L37.464,27.781z M39.923,32.033l-1.655,4.964l-1.655-4.964H39.923z M33.055,27.781h2.617  l-0.851,2.551h-3.467L33.055,27.781z M31.818,32.033h3.003l1.501,4.503l-0.065-0.065c0,0-0.002-0.001-0.002-0.001L31.818,32.033z   M48.952,65.949c-0.365,0.323-0.744,0.627-1.133,0.914c-2.679,1.973-5.975,3.153-9.549,3.153c-8.91,0-16.158-7.248-16.158-16.157  c0-7.872,5.547-14.481,13.252-15.876l1.617,1.618c-7.292,0.654-13.027,6.799-13.027,14.258c0,7.894,6.422,14.315,14.316,14.315  c2.8,0,5.406-0.82,7.615-2.216c0.017-0.009,0.035-0.013,0.051-0.022c0.022-0.015,0.042-0.032,0.064-0.047  c1.006-0.649,1.922-1.422,2.735-2.295c0.026-0.028,0.058-0.052,0.084-0.081c0.01-0.011,0.013-0.025,0.023-0.037  c2.314-2.543,3.74-5.909,3.742-9.61c0-0.003,0.001-0.005,0.001-0.007c0-3.308-1.146-6.49-3.241-9.047  c0.42-0.407,0.868-0.779,1.336-1.122c0.025-0.019,0.05-0.038,0.075-0.056c2.373,2.891,3.672,6.494,3.672,10.226  c0,0.001,0.001,0.003,0.001,0.004c-0.001,4.195-1.623,8.011-4.256,10.886c-0.329,0.359-0.674,0.703-1.032,1.03  C49.076,65.836,49.015,65.894,48.952,65.949z M48.193,61.617c-1.741-2.219-2.696-4.936-2.696-7.758c0-2.927,1.01-5.616,2.688-7.758  c1.741,2.216,2.696,4.932,2.697,7.754c0,0.001-0.001,0.003-0.001,0.004C50.882,56.785,49.871,59.475,48.193,61.617z M56.127,53.854  c-0.002-4.055-1.402-7.96-3.939-11.125c1.768-0.945,3.783-1.484,5.924-1.484c6.956,0,12.614,5.659,12.614,12.615  s-5.658,12.614-12.614,12.614c-2.062,0-4.082-0.511-5.903-1.48c2.446-3.056,3.92-6.924,3.92-11.134  C56.128,53.857,56.127,53.855,56.127,53.854z M58.111,70.017c-3.008,0-5.91-0.829-8.46-2.408c0.492-0.409,0.956-0.849,1.402-1.306  c2.156,1.227,4.581,1.872,7.058,1.872c7.894,0,14.315-6.422,14.315-14.315s-6.422-14.316-14.315-14.316  c-2.805,0-5.415,0.823-7.626,2.222c-0.013,0.007-0.028,0.008-0.041,0.017c-0.022,0.015-0.042,0.033-0.064,0.048  c-1.008,0.65-1.925,1.424-2.738,2.299c-0.025,0.027-0.055,0.049-0.08,0.076c-0.01,0.011-0.013,0.024-0.021,0.035  c-2.317,2.544-3.744,5.914-3.744,9.619c0,3.306,1.146,6.488,3.241,9.048c-0.417,0.405-0.864,0.775-1.331,1.117  c-0.027,0.021-0.054,0.041-0.081,0.061c-2.373-2.892-3.671-6.494-3.671-10.226c0-4.194,1.62-8.008,4.25-10.883  c0.329-0.359,0.673-0.703,1.031-1.031c0.066-0.06,0.131-0.121,0.198-0.18c0.358-0.317,0.73-0.615,1.113-0.898  c2.682-1.98,5.983-3.166,9.565-3.166c8.909,0,16.157,7.248,16.157,16.158C74.269,62.769,67.021,70.017,58.111,70.017z">
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div class="timeline-row"></div>
        <div class="timeline-row">
          <div class="timeline-time">
            <div class="px-3" style="font-family: 'font-2'; font-size: 24px;">{{ data.timeLine.party }}</div>
            <div class="px-3" style="font-family: 'font-3'; font-size: 40px;">Nhập tiệc</div>
          </div>
          <div class="timeline-content align-items-end">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" preserveAspectRatio="none" width="100%"
                   height="100%" class="" fill="rgba(44, 68, 33, 1.0)">
                <g>
                  <path d="M13.8,35.8h-1.2V23.4H9.9v12.4H8.4V24.3H6v11.5v2.4v3.4h3.6L7.8,78.7h6.8l-1.9-37.1h3.6v-3.4v-2.4V24.3h-2.4V35.8z    M10.6,76l0.5-10l0.5,10H10.6z M13.8,39.2H8.4v-1h5.4V39.2z"></path>
                  <path d="M87.8,26.8l-5.6,28.1l2.9,4.7l2.7,0.5l-0.9,18.7h7.4V24.3L87.8,26.8z M91.6,76h-1.9l0.9-18.3l-3.9-0.7L85,54.3l5.1-25.6   l1.4-0.6V76z"></path>
                  <path
                        d="M49.5,21.8c-16.1,0-29.2,13.1-29.2,29.2c0,16.1,13.1,29.2,29.2,29.2s29.2-13.1,29.2-29.2C78.7,34.9,65.6,21.8,49.5,21.8z    M49.5,77.9c-14.8,0-26.8-12-26.8-26.8c0-14.8,12-26.8,26.8-26.8s26.8,12,26.8,26.8C76.3,65.8,64.2,77.9,49.5,77.9z">
                  </path>
                  <path
                        d="M32.5,51.1c0-1.5,0.2-2.9,0.6-4.4l-1.2-0.3l1.2,0.3c0.7-2.5,1.9-4.8,3.6-6.8l-0.9-0.8l0.9,0.8c1.5-1.7,3.2-3,5.2-4   l-0.5-1.1l0.5,1.1c2.3-1.2,4.9-1.8,7.5-1.8c0.6,0,1.2,0,1.7,0.1l0.2-2.4c-0.6-0.1-1.3-0.1-2-0.1c-3,0-5.9,0.7-8.6,2l0,0   c0,0,0,0,0,0c0,0,0,0,0,0v0c-2.3,1.1-4.3,2.7-6,4.6l0,0c-2,2.2-3.4,4.9-4.1,7.7l0,0c-0.4,1.6-0.7,3.3-0.7,5c0,1.4,0.1,2.7,0.4,4.1   l2.4-0.5C32.7,53.5,32.5,52.3,32.5,51.1z">
                  </path>
                  <path d="M34,57.9l-2.2,1c2.1,4.8,6.2,8.6,11.1,10.4l0.8-2.3C39.4,65.4,35.8,62.1,34,57.9z"></path>
                  <path d="M45.9,37.5l-8.7,16.6l5.3,9.6l12.6,0.8l7.4,3.5l4.4-5.5L56.1,44.3L45.9,37.5z M61.8,58.5l-11-7.1L48,41.8l6.3,4.2   L61.8,58.5z M48.2,51.2l-7.4,1.2l5-9.6L48.2,51.2z M61.8,64.9l-6.1-2.9L44,61.3l-3.5-6.4l9-1.5l14.2,9.1L61.8,64.9z">
                  </path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>

  <div class="albums py-5">
    <b-container>
      <div class="text-center font-jura mb-5" style="color: white;font-size: 32px;">Albums</div>
      <BCarousel controls indicators>
        <BCarouselSlide v-for="album in  data.albums " :img-src="album">
        </BCarouselSlide>
      </BCarousel>
    </b-container>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "font-1";
  src: url("https://w.ladicdn.com/5d9a96b88c0aa631d811d695/svn-marcel-script-pro-20220327151924.ttf") format("truetype");
}

@font-face {
  font-family: "font-2";
  src: url("https://w.ladicdn.com/5d9a96b88c0aa631d811d695/svn-flamingo-script-20220313163806.otf")
}

@font-face {
  font-family: "font-3";
  src: url("https://w.ladicdn.com/5d9a96b88c0aa631d811d695/9slide05-windsong-20220701032651.ttf") format("truetype");
}

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body,
html {
  --mask-color: var(--body-bg, #fff);
  --mask-opacity: 0.5;
  margin: 0 auto;
}

.container {
  max-width: 800px;
}

.w-100 {
  width: 100% !important;
}

img {
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
}

.main-picture {
  display: flex;
  justify-content: center;
  position: relative;
  background-image: radial-gradient(circle at 13% 47%, rgba(140, 140, 140, 0.03) 0%, rgba(140, 140, 140, 0.03) 25%, transparent 25%, transparent 100%), radial-gradient(circle at 28% 63%, rgba(143, 143, 143, 0.03) 0%, rgba(143, 143, 143, 0.03) 16%, transparent 16%, transparent 100%), radial-gradient(circle at 81% 56%, rgba(65, 65, 65, 0.03) 0%, rgba(65, 65, 65, 0.03) 12%, transparent 12%, transparent 100%), radial-gradient(circle at 26% 48%, rgba(60, 60, 60, 0.03) 0%, rgba(60, 60, 60, 0.03) 6%, transparent 6%, transparent 100%), radial-gradient(circle at 97% 17%, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 56%, transparent 56%, transparent 100%), radial-gradient(circle at 50% 100%, rgba(25, 25, 25, 0.03) 0%, rgba(25, 25, 25, 0.03) 36%, transparent 36%, transparent 100%), radial-gradient(circle at 55% 52%, rgba(69, 69, 69, 0.03) 0%, rgba(69, 69, 69, 0.03) 6%, transparent 6%, transparent 100%), linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
  overflow: hidden;

  img {
    display: block;
  }
}

.divider {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  top: auto;
  bottom: 0;
  height: var(--mask-height, 10vw);
  min-height: var(--mask-min-height, initial);
  max-height: var(--mask-max-height, none);
}

.bg-divider {
  opacity: 1 !important;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
}

.bg-overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: opacity .6s cubic-bezier(0.25, 1, 0.2, 1);
  transition: opacity .6s cubic-bezier(0.25, 1, 0.2, 1);
}

.divider-g {
  fill: var(--mask-color);
}

.divider-o1 {
  fill-opacity: var(--mask-opacity);
}

.divider-o2 {
  fill-opacity: calc(var(--mask-opacity) * 0.6);
}

.divider-o3 {
  fill-opacity: calc(var(--mask-opacity) * 0.3);
}

.divider-o4 {
  fill-opacity: calc(var(--mask-opacity) * 0.15);
}

.info {
  background-image: repeating-linear-gradient(0deg, rgba(255, 224, 173, 0.1) 0px, rgba(255, 224, 173, 0.1) 35px, transparent 35px, transparent 70px), repeating-linear-gradient(90deg, rgba(255, 224, 173, 0.1) 0px, rgba(255, 224, 173, 0.1) 35px, transparent 35px, transparent 70px), linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}

.leaf {
  width: 85px;
  height: 46px;
  display: block;
  background: url('/images/bg-1.png') no-repeat center;
  background-size: cover;
  margin: 30px auto;
}

.info--couple {
  font-family: 'font-2';
  font-size: 40px;
  line-height: 2.5;
}

.info-family {
  font-family: Arima, cursive;
  font-size: 18px;
}

.font-arima {
  font-family: Arima, cursive;
}

.font-philosopher {
  font-family: Philosopher;
}

.font-jura {
  font-family: Jura;
}

.fs-26 {
  font-size: 26px;
}


.timeline {
  position: relative;
  padding: 10px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -2px;
    border-right: 2px dashed #4b546f;
    height: 100%;
    display: block;
  }

  .timeline-row {
    padding-left: 50%;
    position: relative;
    margin-bottom: 30px;
    text-align: left;

    .timeline-time {
      position: absolute;
      right: 50%;
      // top: 15px;
      white-space: nowrap;
      text-align: right;
      margin-right: 20px;
    }

    &:nth-child(odd) {
      padding-left: 0;
      padding-right: 50%;
      text-align: right;

      .timeline-time {
        right: auto;
        left: 50%;
        text-align: left;
        margin-right: 0;
        margin-left: 20px;
      }
    }

    .timeline-content {
      position: relative;
      padding: 0 30px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      &::before {
        content: "";
        position: absolute;
        top: 20px;
        right: -10px;
        width: 20px;
        height: 20px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        z-index: 10;
        background: white;
        border: 2px dashed #4b546f;
      }

      .timeline-icon {
        width: 80px;
      }
    }
  }
}

.albums {
  background-image: repeating-linear-gradient(90deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 15px, transparent 15px, transparent 16px), repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 15px, transparent 15px, transparent 16px), linear-gradient(90deg, hsl(130, 19%, 33%), hsl(130, 19%, 33%), hsl(130, 19%, 33%), hsl(130, 19%, 33%), hsl(130, 19%, 33%));

  .container {
    max-width: 400px;
  }
}
</style>
