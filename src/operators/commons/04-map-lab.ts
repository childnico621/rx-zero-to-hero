import { fromEvent, Observer, range } from "rxjs";
import { map, tap } from "rxjs/operators";


const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius eros dolor, ac rhoncus leo faucibus blandit. Suspendisse volutpat eros vel erat eleifend vestibulum. In hac habitasse platea dictumst. Phasellus in enim dapibus, lobortis tortor in, porttitor est. Duis ornare volutpat eros. Vestibulum non metus eget eros gravida commodo et tempor augue. Integer cursus massa sed placerat faucibus. Phasellus sed felis quis lectus pretium lobortis. Morbi orci purus, euismod a quam vel, dignissim rhoncus est. Cras diam est, pretium nec lobortis a, mattis vitae mauris.
<br/><br/>
Fusce in placerat enim, et elementum mauris. Fusce venenatis mauris sollicitudin sem vehicula dictum. Praesent eget nunc ex. Curabitur ac dui sed ligula efficitur pretium at vitae eros. Aliquam quis eleifend magna, a tempor arcu. Etiam blandit eros congue, sagittis erat semper, efficitur eros. In mi metus, ultrices et auctor et, bibendum vitae erat. Donec lacinia scelerisque consectetur. Sed imperdiet ante id sapien scelerisque cursus.
<br/><br/>
Fusce efficitur leo at libero interdum convallis. Maecenas tincidunt finibus diam, vitae bibendum massa tincidunt sit amet. Integer bibendum massa vel lorem gravida vehicula. Sed vel urna euismod, egestas neque nec, pharetra tortor. Pellentesque aliquet augue ac purus maximus consequat. Etiam sed porta metus. Curabitur metus erat, blandit nec rhoncus vitae, vehicula mollis arcu. Nullam sed dui ac lectus elementum vulputate. Aenean ut ullamcorper ante. Curabitur pretium mollis nulla non volutpat. Fusce quam sapien, suscipit eget rutrum in, imperdiet vitae risus. Curabitur at leo massa.
<br/><br/>
Nunc porta mauris id ante lobortis, ac pulvinar nisi molestie. Donec eu eros varius, dapibus ante et, sodales tortor. Donec ut ante ut risus pretium luctus. Etiam sem risus, blandit a justo id, finibus convallis quam. Nunc consectetur mauris massa, sed venenatis augue hendrerit nec. Vestibulum vehicula id odio at mollis. Integer faucibus, mauris ut rutrum dapibus, tortor ligula hendrerit risus, eu sagittis nibh metus a lectus. Nullam a ante id orci sollicitudin accumsan. Donec accumsan, nisl interdum eleifend aliquam, enim lorem faucibus elit, eu fermentum nibh mi sed orci. Aliquam erat volutpat. Etiam quis egestas justo, et eleifend nisl.
<br/><br/>
Vivamus aliquet nunc in fermentum mollis. Morbi est turpis, venenatis commodo justo nec, finibus lacinia massa. Maecenas vel maximus libero. Donec aliquam mattis ipsum eget interdum. Nulla cursus aliquam dolor, et fringilla purus venenatis id. Etiam eros massa, tempus in magna vel, auctor feugiat tellus. Aenean tincidunt ultricies sapien, at aliquam ex lobortis sit amet. Sed lacinia ligula maximus volutpat ultricies. Morbi volutpat imperdiet elementum. Ut nisi ipsum, dignissim a gravida vitae, scelerisque a neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur molestie, ligula nec malesuada luctus, ante tortor imperdiet erat, nec tempor quam velit nec justo. Ut eget posuere elit. Nulla volutpat congue ipsum ac viverra. Donec eleifend nulla felis, eget ultrices lacus mattis rhoncus.
`
const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// funcion que haga el calculo
const calcPerc = (evt) => {
    let { scrollHeight, clientHeight, scrollTop } = (<HTMLElement>evt.target.documentElement);   
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams

const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(map(evt=> calcPerc(evt)));

progress$.subscribe(percent => {
    progressBar.style.width = `${percent}%`;
});