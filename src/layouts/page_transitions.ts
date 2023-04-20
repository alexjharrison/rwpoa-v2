export default () => {
  navigation.addEventListener("navigate", navigateEvent => {
    const url = new URL(navigateEvent.destination.url);

    if (url.pathname.startsWith("/")) {
      navigateEvent.intercept({
        async handler() {
          const html = await getHTMLFragment(url.pathname);

          // If the browser doesn't support this API, update the DOM as usual
          if (!document.createDocumentTransition) {
            updateTheDOMSomehow(html);
            return;
          }

          // Otherwise, update the DOM within a transition
          const transition = document.createDocumentTransition();
          transition.start(() => updateTheDOMSomehow(html));
        },
      });
    }
  });

  async function getHTMLFragment(pathname: string) {
    const response = await fetch(pathname);
    return await response.text();
  }

  function updateTheDOMSomehow(html: string) {
    document.getElementById("content")!.innerHTML = html;
  }
};
