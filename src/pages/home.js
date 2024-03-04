import mac from "/src/assets/images/macbook.png"
import ios from "/src/assets/images/iphone14pro.png"
import android from "/src/assets/images/android.png"
const component = () => {
    const component = `
    <div class="home">
        <div class="banner">
            <div class="container">
                <div class="start-logo">
                    <span class="wa-txt">WEBVIEW APP</span>
                    <span class="font-2">PLAYGROUND</span>
                </div>

                <div class="mac">
                    <div class="mac-img attribute">
                        <img src="${mac}">
                        <a class="attr-text" href="https://pngtree.com/freepng/macbook-pro-16-2019_9190542.html" target="_blank">png image from pngtree.com</a> 
                        <div class="mac-inner-content">
                            <div class="wa-logo">
                                <span>WEBVIEW APP</span>
                                <span class="font-2">PLAYGROUND</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="phone">
                    <div class="phone-img attribute">
                        <img src="${ios}" alt="Image by svstudioart on Freepik">
                        <a class="attr-text" href="https://www.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_33632328.htm#query=iphone%2014%20png&position=0&from_view=keyword&track=ais&uuid=083cc49a-f3d2-4da6-bdce-b6f4f4ed2bdc" target="_blank">Image by svstudioart on Freepik</a> 
                        <div class="phone-inner-content">
                            <div class="wa-logo">
                                <span class="wa-txt">WEBVIEW APP</span>
                                <span class="font-2">PLAYGROUND</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="phone">
                    <div class="phone-img attribute">
                        <img src="${android}" alt="png image from pngtree.com">
                        <a class="attr-text" href='https://pngtree.com/freepng/mobile-mockup-black-android-smartphone-frame-design-hanging-on-transparent-background_6067790.html' target="_blank">png image from pngtree.com/</a>
                        <div class="phone-inner-content">
                            <div class="wa-logo">
                                <span class="wa-txt">WEBVIEW APP</span>
                                <span class="font-2">PLAYGROUND</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div>
    `
    return component
}
export default component()
  
{/* <a href="https://www.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_33632328.htm#query=iphone%2014%20png&position=0&from_view=keyword&track=ais&uuid=083cc49a-f3d2-4da6-bdce-b6f4f4ed2bdc">Image by svstudioart</a> on Freepik */}