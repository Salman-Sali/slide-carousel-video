declare module "slide-carousel" {
  export default class CarouselBuilder {
    constructor(container: HTMLElement);

    static builder(container: HTMLElement): CarouselBuilder;

    setVideos(videos: string[]): this;
    setInterval(ms: number): this;
    setAutoPlay(flag: boolean): this;
    build(): any;
  }
  
}
