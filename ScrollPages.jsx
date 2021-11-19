import { TOTAL_SCREENS } from "./CommonUtilities";
import { BehaviorSubject, Subject } from 'rxjs'


export default class ScrollPages {
    static scrollHandler = new ScrollPages();

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()


    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreen);
    }
    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me")
        if (!contactMeScreen) {
            return
        }
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }
    scrollToResume = () => {
        let resumeScreen = document.getElementById("Resume")
        if (!resumeScreen) {
            return
        }
        resumeScreen.scrollIntoView({behavior: "smooth"})
    }
    scrollToHome = () => {
        let homePage = document.getElementById("Contact Me")
        if (!homePage) {
            return
        }
        homePage.scrollPageIntoView({behavior: "smooth"})
    }
    isElementInView = (elem, type) => {
        let pageView = elem.getBoundingClientRect();
        let topOfPage = pageView.top;
        let bottomofPage = pageView.bottom;

        let partiallySeen = topOfPage < window.innerHeight && bottomofPage >= 0;
        let completelySeen = topOfPage >= 0 && bottomofPage <= window.innerHeight;

        switch(type){
            case "partial":
                return partiallySeen

            case "complete":
                return completelySeen
                
            default:
                return false
        }
    }

    checkCurrentScreen = (event) => {
        if (!event || Object.keys(event).length < 1) {
            return;
        }
        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM) {
                continue
            }

            let fullySeen = this.isElementInView(screenFromDOM, "complete")
            let partiallySeen = this.isElementInView(screenFromDOM, "partial")

            if (fullySeen || partiallySeen) {
                if (partiallySeen && !screen.alreadyRendered) {
                    ScrollPages.currentScreenFadeIn.next ({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullySeen) {
                    ScrollPages.currentScreenBroadCaster.next ({
                        screenInView: screen.screen_name
                    });
                    break
                }
            }
        }
    }
}