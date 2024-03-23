onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  window.alert("¡Hola Olenka! Feliz día. Quiero disculparme por no haberte regalado flores amarillas, pero en su lugar, te he programado unas hermosas flores azules. Fue un desafío, requirió muchas líneas de código, pero espero que te guste igualmente.");
  alert("Puede parecer algo trivial, pero detrás de esta aparente simplicidad se esconden más de 200 líneas de HTML, más de 1000 de CSS y 8 de JavaScript. Aunque pueda parecer sencillo, el proceso fue bastante complejo. Sé que tal vez no le darás la importancia que merece, pero te recomiendo abrirlo en una computadora para apreciarlo mejor");
