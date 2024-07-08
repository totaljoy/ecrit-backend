/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
    await knex('reviews').del();
    await knex('reviews').insert([
        {
            id: 1,
            user_id: 1,
            show_id: 2,
            review: `You know, I'm a sucker for art that plays with language, and this hit all the right notes for me.

The LED display is pure magic – it snakes up all six ramps with Holzer's razor-sharp one-liners from "Truisms" and "Inflammatory Essays." It's Holzer doing what she does best: making you read, think, and question all at once.`,
            seen: true,
            date: `2024-07-04 20:43:50`
        },
        {
            id: 2,
            user_id: 2,
            show_id: 4,
            seen: true,
            date: `2024-07-03 18:43:50`
        },
        {
            id: 3,
            user_id: 3,
            show_id: 4,
            review: `well? does anyone like the whitney biennial? do the artists? collectors? gallerists? advisors? the artgoing public? the fucking curators? i can't discern, from any camp, any real enthusiasm; it has the air of a tired old social tradition that keeps happening only by force of habit, everyone involved having long forgotten what they're supposed to be celebrating or why. the biennial is ostensibly intended to showcase and promote the current state of contemporary art, which may have once been an exciting prospect but is now so unappealing that it's hard to imagine that a whitney biennial could have ever been important, or even good. this is not entirely the fault of the whitney, to be fair, as they've accurately showcased how deeply uninspiring the art world is at present, but, then again, the narrative being shilled here is a perfect portrait of the mindset that's turned the climate of the art world into an indifferent void.
            
                    anyway, aside from charles ray, buck ellison's staged imitations of important moments in erik prince's life and michael e. smith's hanging bottles with motors were pretty good. nothing else did much for me.`,
            seen: true,
            date: `2024-07-02 20:43:50`
        },
        {
            id: 4,
            user_id: 4,
            show_id: 6,
            review: `ojini's breakdown of pianos remind me of the idea of sampling in music, but with physical objects.

the whole exhibition is a meditation on memory, inheritance, and black life in america. ojini takes these pianos - symbols of sophistication and aspiration - and transforms them into something entirely new. it's a clever commentary on shifting values and cultural significance.`,
            seen: true,
            date: `2024-07-01 20:43:50`
        },
        {
            id: 5,
            user_id: 1,
            show_id: 9,
            seen: true,
            date: `2024-07-03 15:43:50`
        },
        {
            id: 6,
            user_id: 4,
            show_id: 11,
            seen: true,
            date: `2024-07-03 15:43:50`
        },
        {
            id: 7,
            user_id: 2,
            show_id: 7,
            seen: true,
            review: `so fucking happy for ben. he's the goat. to an american audience, an image of a gun can feel as dangerous as the gun itself. the guns in the show are not real, and neither is the conflict. they are representations themselves, airsoft replicas, which fire plastic bbs out of orange tipped muzzles during a simulated military operation known as milsim.`,
            date: `2024-07-05 15:43:50`
        },
        {
            id: 8,
            user_id: 3,
            show_id: 8,
            seen: true,
            date: `2024-07-06 15:43:50`
        },
        {
            id: 9,
            user_id: 1,
            show_id: 8,
            seen: true,
            date: `2024-07-06 15:43:50`
        },
        {
            id: 10,
            user_id: 3,
            show_id: 11,
            seen: true,
            review: `after some tough times in the 90s, emin decided to face her issues with painting head-on. she turned her studio into this cool space where people could see her work. smart move.
            she's taking on these famous male artists, using their styles but making them her own. it's like she's saying, "hey, i can do this too, and i'll do it my way."
            emin's not buying into the whole "women are just models" thing. she's both the artist and the model, challenging that typical male gaze. it's pretty empowering.
            this piece is a big deal, leading to her other famous works like "my bed." emin's all about putting her real emotions and experiences out there, and it's really relatable.`,
            date: `2024-07-06 15:43:50`
        },
        {
            id: 11,
            user_id: 2,
            show_id: 10,
            seen: true,
            date: `2024-07-07 15:43:50`
        }
    ])
}