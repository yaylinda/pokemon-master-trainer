export interface PokemonSprite {
    generation: string,
    pokemon_variant: string,
    pokemon_name: string,
    sprite_type: string,
    sprite_url: string,
}

export interface PokemonSpriteWithId extends PokemonSprite {
  id: number,
}

export const pokemonSprites: PokemonSprite[] = [
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bulbasaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bulbasaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/bulbasaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ivysaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/ivysaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ivysaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/ivysaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venusaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/venusaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venusaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/venusaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Venusaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/venusaur-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Venusaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/venusaur-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Venusaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/venusaur-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Venusaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/venusaur-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmander",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/charmander.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmander",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/charmander.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmeleon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/charmeleon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmeleon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/charmeleon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charizard",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/charizard.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charizard",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/charizard.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megax",
      "pokemon_name": "Charizard",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/charizard-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megax",
      "pokemon_name": "Charizard",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/charizard-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megay",
      "pokemon_name": "Charizard",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/charizard-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megay",
      "pokemon_name": "Charizard",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/charizard-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Squirtle",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/squirtle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Squirtle",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/squirtle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wartortle",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/wartortle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wartortle",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/wartortle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Blastoise",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/blastoise.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Blastoise",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/blastoise.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Blastoise",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/blastoise-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Blastoise",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/blastoise-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Caterpie",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/caterpie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Caterpie",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/caterpie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Metapod",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/metapod.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Metapod",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/metapod.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Butterfree",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/butterfree.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Butterfree",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/butterfree.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Butterfree",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/butterfree-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Butterfree",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/butterfree-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weedle",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/weedle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weedle",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/weedle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kakuna",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kakuna.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kakuna",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kakuna.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Beedrill",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/beedrill.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Beedrill",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/beedrill.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Beedrill",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/beedrill-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Beedrill",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/beedrill-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgey",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pidgey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgey",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pidgey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeotto",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeotto",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pidgeotto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeot",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pidgeot.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeot",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pidgeot.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rattata",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rattata.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rattata",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rattata.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rattata",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rattata-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rattata",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rattata-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Rattata",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rattata-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Rattata",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rattata-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/raticate.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/raticate.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Raticate",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/raticate-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Raticate",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/raticate-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Raticate",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/raticate-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Raticate",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/raticate-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Totem",
      "pokemon_name": "Raticate",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/raticate-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Totem",
      "pokemon_name": "Raticate",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/raticate-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Spearow",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/spearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Spearow",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/spearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Fearow",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/fearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Fearow",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/fearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ekans",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/ekans.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ekans",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/ekans.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arbok",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/arbok.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arbok",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/arbok.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Cosplay",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-cosplay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Cosplay",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu-cosplay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Rockstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-rockstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Rockstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu-rockstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Belle",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-belle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Belle",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu-belle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Popstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-popstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Popstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu-popstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Phd",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-phd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Phd",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu-phd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Libre",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-libre.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Libre",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pikachu-libre.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kantocap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-kantocap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kantocap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-kantocap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Hoenncap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-hoenncap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Hoenncap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-hoenncap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Sinnohcap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-sinnohcap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Sinnohcap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-sinnohcap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Unovacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-unovacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Unovacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-unovacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kaloscap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-kaloscap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kaloscap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-kaloscap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alolacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-alolacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alolacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-alolacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Partnercap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-partnercap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Partnercap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pikachu-partnercap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raichu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/raichu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raichu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/raichu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Raichu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/raichu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Raichu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/raichu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Raichu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/raichu-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Raichu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/raichu-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/sandshrew.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/sandshrew.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/sandshrew-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/sandshrew-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandslash",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/sandslash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandslash",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/sandslash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandslash",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/sandslash-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandslash",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/sandslash-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran ???",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/nidoran_f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran_f",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/nidoran_f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorina",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/nidorina.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorina",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/nidorina.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoqueen",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoqueen",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/nidoqueen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran ???",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/nidoran_m.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran_m",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/nidoran_m.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorino",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/nidorino.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorino",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/nidorino.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoking",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/nidoking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoking",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/nidoking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefairy",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/clefairy.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefairy",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/clefairy.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefable",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/clefable.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefable",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/clefable.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vulpix",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/vulpix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vulpix",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/vulpix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Vulpix",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/vulpix-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Vulpix",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/vulpix-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ninetales",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/ninetales.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ninetales",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/ninetales.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Ninetales",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/ninetales-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Ninetales",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/ninetales-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jigglypuff",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jigglypuff",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/jigglypuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wigglytuff",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wigglytuff",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/wigglytuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zubat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/zubat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zubat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/zubat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Zubat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/zubat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Zubat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/zubat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golbat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/golbat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golbat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/golbat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Golbat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/golbat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Golbat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/golbat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Oddish",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/oddish.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Oddish",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/oddish.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gloom",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gloom.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gloom",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gloom.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gloom",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gloom-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gloom",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gloom-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vileplume",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/vileplume.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vileplume",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/vileplume.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Vileplume",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/vileplume-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Vileplume",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/vileplume-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Paras",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/paras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Paras",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/paras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Parasect",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/parasect.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Parasect",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/parasect.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venonat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/venonat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venonat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/venonat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venomoth",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/venomoth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venomoth",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/venomoth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Diglett",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/diglett.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Diglett",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/diglett.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Diglett",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/diglett-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Diglett",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/diglett-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dugtrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dugtrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dugtrio-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dugtrio-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Meowth",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/meowth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Meowth",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/meowth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Meowth",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/meowth-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Meowth",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/meowth-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Persian",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/persian.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Persian",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/persian.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Persian",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/persian-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Persian",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/persian-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Psyduck",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/psyduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Psyduck",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/psyduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golduck",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/golduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golduck",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/golduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mankey",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/mankey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mankey",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/mankey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Primeape",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/primeape.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Primeape",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/primeape.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Growlithe",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/growlithe.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Growlithe",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/growlithe.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arcanine",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/arcanine.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arcanine",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/arcanine.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwag",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/poliwag.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwag",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/poliwag.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwhirl",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/poliwhirl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwhirl",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/poliwhirl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwrath",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/poliwrath.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwrath",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/poliwrath.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Abra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/abra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Abra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/abra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kadabra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kadabra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kadabra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kadabra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Kadabra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kadabra-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Kadabra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kadabra-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Alakazam",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/alakazam.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Alakazam",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/alakazam.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Alakazam",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/alakazam-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Alakazam",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/alakazam-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Alakazam",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/alakazam-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Alakazam",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/alakazam-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machop",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/machop.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machop",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/machop.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machoke",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/machoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machoke",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/machoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machamp",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/machamp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machamp",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/machamp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bellsprout",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/bellsprout.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bellsprout",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/bellsprout.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weepinbell",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/weepinbell.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weepinbell",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/weepinbell.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Victreebel",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/victreebel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Victreebel",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/victreebel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacool",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/tentacool.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacool",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/tentacool.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacruel",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/tentacruel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacruel",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/tentacruel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Geodude",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/geodude.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Geodude",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/geodude.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Geodude",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/geodude-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Geodude",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/geodude-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Graveler",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/graveler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Graveler",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/graveler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Graveler",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/graveler-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Graveler",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/graveler-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golem",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/golem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golem",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/golem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Golem",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/golem-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Golem",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/golem-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ponyta",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/ponyta.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ponyta",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/ponyta.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rapidash",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rapidash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rapidash",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rapidash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowpoke",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/slowpoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowpoke",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/slowpoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowbro",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/slowbro.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowbro",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/slowbro.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Slowbro",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/slowbro-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Slowbro",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/slowbro-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magnemite",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/magnemite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magnemite",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/magnemite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magneton",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/magneton.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magneton",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/magneton.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Farfetchd",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/farfetchd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Farfetchd",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/farfetchd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Doduo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/doduo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Doduo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/doduo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Doduo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/doduo-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Doduo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/doduo-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dodrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dodrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dodrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dodrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Dodrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dodrio-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Dodrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dodrio-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seel",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/seel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seel",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/seel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dewgong",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dewgong.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dewgong",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dewgong.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Grimer",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/grimer.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Grimer",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/grimer.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Grimer",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/grimer-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Grimer",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/grimer-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Muk",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/muk.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Muk",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/muk.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Muk",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/muk-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Muk",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/muk-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Shellder",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/shellder.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Shellder",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/shellder.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cloyster",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/cloyster.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cloyster",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/cloyster.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gastly",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gastly.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gastly",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gastly.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Haunter",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/haunter.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Haunter",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/haunter.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gengar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gengar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gengar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gengar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gengar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gengar-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gengar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gengar-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Onix",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/onix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Onix",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/onix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Drowzee",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/drowzee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Drowzee",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/drowzee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hypno",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/hypno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hypno",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/hypno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Hypno",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/hypno-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Hypno",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/hypno-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Krabby",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/krabby.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Krabby",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/krabby.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kingler",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kingler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kingler",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kingler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Voltorb",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/voltorb.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Voltorb",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/voltorb.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electrode",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/electrode.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electrode",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/electrode.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggcute",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/exeggcute.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggcute",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/exeggcute.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/exeggutor.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/exeggutor.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/exeggutor-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/exeggutor-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cubone",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/cubone.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cubone",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/cubone.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Marowak",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/marowak.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Marowak",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/marowak.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Marowak",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/marowak-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Marowak",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/marowak-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Totem",
      "pokemon_name": "Marowak",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/marowak-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Totem",
      "pokemon_name": "Marowak",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/marowak-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonlee",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/hitmonlee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonlee",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/hitmonlee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonchan",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonchan",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/hitmonchan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lickitung",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/lickitung.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lickitung",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/lickitung.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Koffing",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/koffing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Koffing",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/koffing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weezing",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/weezing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weezing",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/weezing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rhyhorn.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rhyhorn.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rhyhorn-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rhyhorn-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhydon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rhydon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhydon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rhydon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhydon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/rhydon-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhydon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/rhydon-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Chansey",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/chansey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Chansey",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/chansey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tangela",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/tangela.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tangela",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/tangela.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kangaskhan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kangaskhan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kangaskhan-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kangaskhan-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Horsea",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/horsea.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Horsea",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/horsea.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seadra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/seadra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seadra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/seadra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Goldeen",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/goldeen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Goldeen",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/goldeen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Goldeen",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/goldeen-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Goldeen",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/goldeen-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seaking",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/seaking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seaking",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/seaking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Seaking",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/seaking-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Seaking",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/seaking-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Staryu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/staryu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Staryu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/staryu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Starmie",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/starmie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Starmie",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/starmie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mr.mime",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/mr.mime.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mr._mime",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/mr._mime.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Scyther",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/scyther.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Scyther",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/scyther.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Scyther",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/scyther-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Scyther",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/scyther-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jynx",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/jynx.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jynx",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/jynx.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electabuzz",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/electabuzz.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electabuzz",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/electabuzz.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magmar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/magmar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magmar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/magmar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pinsir",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pinsir.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pinsir",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pinsir.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Pinsir",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/pinsir-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Pinsir",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/pinsir-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tauros",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/tauros.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tauros",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/tauros.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magikarp",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/magikarp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magikarp",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/magikarp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Magikarp",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/magikarp-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Magikarp",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/magikarp-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gyarados",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gyarados.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gyarados",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gyarados.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gyarados",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gyarados-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gyarados",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gyarados-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gyarados",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/gyarados-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gyarados",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/gyarados-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lapras",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/lapras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lapras",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/lapras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ditto",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/ditto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ditto",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/ditto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Eevee",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/eevee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Eevee",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/eevee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vaporeon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/vaporeon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vaporeon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/vaporeon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jolteon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/jolteon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jolteon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/jolteon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Flareon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/flareon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Flareon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/flareon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Porygon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/porygon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Porygon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/porygon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omanyte",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/omanyte.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omanyte",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/omanyte.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omastar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/omastar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omastar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/omastar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabuto",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kabuto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabuto",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kabuto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabutops",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/kabutops.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabutops",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/kabutops.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/aerodactyl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/aerodactyl-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/aerodactyl-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Snorlax",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/snorlax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Snorlax",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/snorlax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Articuno",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/articuno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Articuno",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/articuno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zapdos",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/zapdos.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zapdos",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/zapdos.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Moltres",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/moltres.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Moltres",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/moltres.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dratini",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dratini.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dratini",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dratini.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonair",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dragonair.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonair",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dragonair.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonite",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/dragonite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonite",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/dragonite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/mewtwo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/mewtwo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megax",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/mewtwo-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megax",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/mewtwo-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megay",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/mewtwo-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megay",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/mewtwo-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mew",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/normal-sprite/mew.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mew",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/shiny-sprite/mew.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bulbasaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/bulbasaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bulbasaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/bulbasaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ivysaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/ivysaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ivysaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/ivysaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venusaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/venusaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venusaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/venusaur.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venusaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/venusaur-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venusaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/venusaur-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega venusaur",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/venusaur-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega venusaur",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/venusaur-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmander",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/charmander.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmander",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/charmander.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmeleon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/charmeleon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charmeleon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/charmeleon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charizard",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/charizard.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Charizard",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/charizard.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega x charizard",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/charizard-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega x charizard",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/charizard-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega y charizard",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/charizard-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega y charizard",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/charizard-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Squirtle",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/squirtle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Squirtle",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/squirtle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wartortle",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/wartortle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wartortle",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/wartortle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Blastoise",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/blastoise.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Blastoise",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/blastoise.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega blastoise",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/blastoise-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Meaga blastoise",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/blastoise-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Caterpie",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/caterpie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Caterpie",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/caterpie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Metapod",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/metapod.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Metapod",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/metapod.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Butterfree",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/butterfree.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Butterfree",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/butterfree.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Butterfree",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/butterfree-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Butterfree",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/butterfree-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weedle",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/weedle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weedle",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/weedle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kakuna",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kakuna.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kakuna",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kakuna.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Beedrill",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/beedrill.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Beedrill",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/beedrill.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega beedrill",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/beedrill-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mega beedrill",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/beedrill-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgey",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pidgey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgey",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pidgey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeotto",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pidgeotto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeotto",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pidgeotto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeot",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pidgeot.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pidgeot",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pidgeot.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rattata",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rattata.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rattata",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rattata.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rattata",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rattata-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rattata",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rattata-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alolan",
      "pokemon_name": "Rattata",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rattata-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alolan",
      "pokemon_name": "Rattata",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rattata-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/raticate.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/raticate.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/raticate-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/raticate-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate alolan",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/raticate-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate alolan",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/raticate-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate totem",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/raticate-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raticate totem",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/raticate-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Spearow",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/spearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Spearow",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/spearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Fearow",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/fearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Fearow",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/fearow.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ekans",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/ekans.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ekans",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/ekans.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arbok",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/arbok.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arbok",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/arbok.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Cosplay",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-cosplay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Cosplay",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu-cosplay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Rockstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-rockstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Rockstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu-rockstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Belle",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-belle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Belle",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu-belle.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Popstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-popstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Popstar",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu-popstar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Phd",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-phd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Phd",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu-phd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Libre",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-libre.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Libre",
      "pokemon_name": "Pikachu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu-libre.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kantocap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-kantocap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kantocap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-kantocap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Hoenncap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-hoenncap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Hoenncap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-hoenncap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Sinnohcap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-sinnohcap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Sinnohcap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-sinnohcap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Unovacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-unovacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Unovacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-unovacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kaloscap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-kaloscap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Kaloscap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-kaloscap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alolacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-alolacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alolacap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-alolacap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Partnercap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-partnercap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Partnercap",
      "pokemon_name": "Pikachu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-partnercap.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raichu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/raichu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Raichu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/raichu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Raichu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/raichu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Raichu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/raichu-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Raichu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/raichu-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Raichu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/raichu-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/sandshrew.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/sandshrew.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/sandshrew-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandshrew",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/sandshrew-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandslash",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/sandslash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Sandslash",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/sandslash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandslash",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/sandslash-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Sandslash",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/sandslash-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran_f",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/nidoran_f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran_f",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/nidoran_f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorina",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/nidorina.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorina",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/nidorina.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoqueen",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/nidoqueen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoqueen",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/nidoqueen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran_m",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/nidoran_m.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoran_m",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/nidoran_m.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorino",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/nidorino.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidorino",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/nidorino.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoking",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/nidoking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Nidoking",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/nidoking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefairy",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/clefairy.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefairy",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/clefairy.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefable",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/clefable.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Clefable",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/clefable.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vulpix",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/vulpix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vulpix",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/vulpix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Vulpix",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/vulpix-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Vulpix",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/vulpix-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ninetales",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/ninetales.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ninetales",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/ninetales.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Ninetales",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/ninetales-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Ninetales",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/ninetales-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jigglypuff",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/jigglypuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jigglypuff",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/jigglypuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wigglytuff",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/wigglytuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Wigglytuff",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/wigglytuff.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zubat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/zubat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zubat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/zubat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Zubat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/zubat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Zubat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/zubat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golbat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/golbat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golbat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/golbat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Golbat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/golbat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Golbat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/golbat-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Oddish",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/oddish.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Oddish",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/oddish.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gloom",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gloom.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gloom",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gloom.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gloom",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gloom-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gloom",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gloom-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vileplume",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/vileplume.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vileplume",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/vileplume.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Vileplume",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/vileplume-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Vileplume",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/vileplume-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Paras",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/paras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Paras",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/paras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Parasect",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/parasect.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Parasect",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/parasect.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venonat",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/venonat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venonat",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/venonat.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venomoth",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/venomoth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Venomoth",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/venomoth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Diglett",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/diglett.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Diglett",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/diglett.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Diglett",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/diglett-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Diglett",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/diglett-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dugtrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dugtrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dugtrio-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Dugtrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dugtrio-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Meowth",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/meowth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Meowth",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/meowth.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Meowth",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/meowth-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Meowth",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/meowth-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Persian",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/persian.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Persian",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/persian.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Persian",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/persian-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Persian",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/persian-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Psyduck",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/psyduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Psyduck",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/psyduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golduck",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/golduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golduck",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/golduck.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mankey",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/mankey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mankey",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/mankey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Primeape",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/primeape.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Primeape",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/primeape.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Growlithe",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/growlithe.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Growlithe",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/growlithe.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arcanine",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/arcanine.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Arcanine",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/arcanine.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwag",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/poliwag.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwag",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/poliwag.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwhirl",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/poliwhirl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwhirl",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/poliwhirl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwrath",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/poliwrath.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Poliwrath",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/poliwrath.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Abra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/abra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Abra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/abra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kadabra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kadabra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kadabra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kadabra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Kadabra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kadabra-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Kadabra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kadabra-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Alakazam",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/alakazam.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Alakazam",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/alakazam.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Alakazam",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/alakazam-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Alakazam",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/alakazam-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Alakazam",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/alakazam-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Alakazam",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/alakazam-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machop",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/machop.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machop",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/machop.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machoke",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/machoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machoke",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/machoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machamp",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/machamp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Machamp",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/machamp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bellsprout",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/bellsprout.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Bellsprout",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/bellsprout.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weepinbell",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/weepinbell.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weepinbell",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/weepinbell.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Victreebel",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/victreebel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Victreebel",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/victreebel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacool",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/tentacool.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacool",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/tentacool.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacruel",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/tentacruel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tentacruel",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/tentacruel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Geodude",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/geodude.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Geodude",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/geodude.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Geodude",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/geodude-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Geodude",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/geodude-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Graveler",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/graveler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Graveler",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/graveler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Graveler",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/graveler-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Graveler",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/graveler-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golem",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/golem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Golem",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/golem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Golem",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/golem-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Golem",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/golem-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ponyta",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/ponyta.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ponyta",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/ponyta.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rapidash",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rapidash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rapidash",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rapidash.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowpoke",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/slowpoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowpoke",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/slowpoke.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowbro",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/slowbro.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Slowbro",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/slowbro.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Slowbro",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/slowbro-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Slowbro",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/slowbro-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magnemite",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/magnemite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magnemite",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/magnemite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magneton",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/magneton.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magneton",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/magneton.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Farfetchd",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/farfetchd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Farfetchd",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/farfetchd.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Doduo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/doduo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Doduo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/doduo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Doduo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/doduo-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Doduo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/doduo-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dodrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dodrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dodrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dodrio.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Dodrio",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dodrio-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Dodrio",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dodrio-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seel",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/seel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seel",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/seel.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dewgong",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dewgong.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dewgong",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dewgong.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Grimer",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/grimer.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Grimer",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/grimer.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Grimer",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/grimer-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Grimer",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/grimer-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Muk",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/muk.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Muk",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/muk.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Muk",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/muk-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Muk",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/muk-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Shellder",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/shellder.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Shellder",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/shellder.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cloyster",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/cloyster.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cloyster",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/cloyster.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gastly",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gastly.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gastly",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gastly.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Haunter",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/haunter.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Haunter",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/haunter.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gengar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gengar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gengar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gengar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gengar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gengar-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gengar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gengar-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Onix",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/onix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Onix",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/onix.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Drowzee",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/drowzee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Drowzee",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/drowzee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hypno",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/hypno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hypno",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/hypno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Hypno",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/hypno-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Hypno",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/hypno-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Krabby",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/krabby.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Krabby",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/krabby.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kingler",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kingler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kingler",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kingler.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Voltorb",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/voltorb.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Voltorb",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/voltorb.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electrode",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/electrode.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electrode",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/electrode.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggcute",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/exeggcute.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggcute",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/exeggcute.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/exeggutor.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/exeggutor.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/exeggutor-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Exeggutor",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/exeggutor-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cubone",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/cubone.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Cubone",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/cubone.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Marowak",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/marowak.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Marowak",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/marowak.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Marowak",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/marowak-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Alola",
      "pokemon_name": "Marowak",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/marowak-alola.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Totem",
      "pokemon_name": "Marowak",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/marowak-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Totem",
      "pokemon_name": "Marowak",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/marowak-totem.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonlee",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/hitmonlee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonlee",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/hitmonlee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonchan",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/hitmonchan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Hitmonchan",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/hitmonchan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lickitung",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/lickitung.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lickitung",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/lickitung.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Koffing",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/koffing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Koffing",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/koffing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weezing",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/weezing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Weezing",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/weezing.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rhyhorn.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rhyhorn.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rhyhorn-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhyhorn",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rhyhorn-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhydon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rhydon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Rhydon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rhydon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhydon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/rhydon-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Rhydon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/rhydon-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Chansey",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/chansey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Chansey",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/chansey.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tangela",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/tangela.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tangela",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/tangela.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kangaskhan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kangaskhan.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kangaskhan-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Kangaskhan",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kangaskhan-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Horsea",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/horsea.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Horsea",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/horsea.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seadra",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/seadra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seadra",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/seadra.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Goldeen",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/goldeen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Goldeen",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/goldeen.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Goldeen",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/goldeen-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Goldeen",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/goldeen-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seaking",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/seaking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Seaking",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/seaking.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Seaking",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/seaking-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Seaking",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/seaking-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Staryu",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/staryu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Staryu",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/staryu.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Starmie",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/starmie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Starmie",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/starmie.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mr._mime",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/mr._mime.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mr._mime",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/mr._mime.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Scyther",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/scyther.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Scyther",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/scyther.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Scyther",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/scyther-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Scyther",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/scyther-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jynx",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/jynx.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jynx",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/jynx.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electabuzz",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/electabuzz.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Electabuzz",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/electabuzz.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magmar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/magmar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magmar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/magmar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pinsir",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pinsir.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Pinsir",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pinsir.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Pinsir",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/pinsir-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Pinsir",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/pinsir-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tauros",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/tauros.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Tauros",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/tauros.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magikarp",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/magikarp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Magikarp",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/magikarp.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Magikarp",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/magikarp-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Magikarp",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/magikarp-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gyarados",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gyarados.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Gyarados",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gyarados.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gyarados",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gyarados-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "F",
      "pokemon_name": "Gyarados",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gyarados-f.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gyarados",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/gyarados-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Gyarados",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/gyarados-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lapras",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/lapras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Lapras",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/lapras.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ditto",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/ditto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Ditto",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/ditto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Eevee",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/eevee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Eevee",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/eevee.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vaporeon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/vaporeon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Vaporeon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/vaporeon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jolteon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/jolteon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Jolteon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/jolteon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Flareon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/flareon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Flareon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/flareon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Porygon",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/porygon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Porygon",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/porygon.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omanyte",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/omanyte.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omanyte",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/omanyte.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omastar",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/omastar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Omastar",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/omastar.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabuto",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kabuto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabuto",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kabuto.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabutops",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/kabutops.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Kabutops",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/kabutops.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/aerodactyl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/aerodactyl.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/aerodactyl-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Mega",
      "pokemon_name": "Aerodactyl",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/aerodactyl-mega.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Snorlax",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/snorlax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Snorlax",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/snorlax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Articuno",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/articuno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Articuno",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/articuno.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zapdos",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/zapdos.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Zapdos",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/zapdos.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Moltres",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/moltres.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Moltres",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/moltres.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dratini",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dratini.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dratini",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dratini.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonair",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dragonair.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonair",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dragonair.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonite",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/dragonite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Dragonite",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/dragonite.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/mewtwo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/mewtwo.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megax",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/mewtwo-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megax",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/mewtwo-megax.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megay",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/mewtwo-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "Megay",
      "pokemon_name": "Mewtwo",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/mewtwo-megay.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mew",
      "sprite_type": "Normal",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/normal-back/mew.gif"
    },
    {
      "generation": "1",
      "pokemon_variant": "None",
      "pokemon_name": "Mew",
      "sprite_type": "Shiny",
      "sprite_url": "https://projectpokemon.org/images/sprites-models/shiny-back/mew.gif"
    }
  ];
  