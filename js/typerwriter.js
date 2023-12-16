new TypeIt(".introduction", {
    speed: 200,
    loop: true,
  })
  .type('Tricô', {delay: 900})
  .delete(6)
  .type('Teia', {delay:600})
  .delete(5)
  .type('Tecido', { delay: 900})
  .delete(5)
  .go();