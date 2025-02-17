/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
    await knex('exhibitions').del();
    await knex('exhibitions').insert([
        {
            show_id: 1,
            location:  `Andrew Kreps Gallery`,
            address: `22 Cortlandt Alley, New York, NY 10013`,
            title: `Eighteen Painters`,
            opening_date: `June 21`,
            closing_date: `August 31`,
            show_image: 'AKG.jpeg',
            description: `Eighteen Painters brings together a group of international artists, all born after 1980, who take diverse approaches to the medium of painting. Spanning the gallery's spaces at 22 Cortlandt Alley and 394 Broadway, the exhibition organizes itself not based upon thematic connections, but instead, as a way to look beyond paint's physical application, to demonstrate its continued vitality as a tool for research and exploration.`
        },
        {
            show_id: 2,
            location: `Solomon R. Guggenheim Museum`,
            address: `1071 5th Ave, New York, NY 10128`,
            title: `Light Line`,
            opening_date: `May 17`,
            closing_date: `September 29`,
            show_image: 'Guggenheim.jpg',
            description: `This exhibition presents a reimagination of Jenny Holzer’s landmark 1989 installation at the Guggenheim. Climbing all six ramps of the Frank Lloyd Wright-designed rotunda to the building’s apex, the site-specific installation transforms the building with a display of scrolling texts, featuring selections from her iconic series, such as “Truisms” and “Inflammatory Essays”. Light Line highlights the incisive use of the written word across time and media in Holzer’s practice. In addition to the LED sign, the exhibition features a selection of Holzer’s works from the 1970s to the present day, including paintings, works on paper, and stone pieces. From May 16–20, the artist’s light projection For the Guggenheim illuminated the building’s façade with with a selection of poems and eyewitness accounts that speak to the necessity of peace.`
        },
        {
            show_id: 3,
            location: `Swiss Institute`,
            address: `38 St Marks Pl, New York, NY 10003`,
            title: `I'm Not`,
            opening_date: `May 1`,
            closing_date: `August 25`,
            show_image: 'SI.jpeg',
            description: `Swiss Institute (SI) presents I’m Not, the first institutional solo exhibition by artist Shuang Li, featuring newly commissioned sculpture and video installations. Li’s work explores how language, relationships and identities are formed and mediated through screens and the internet. For I’m Not, Li delves into her own life as a fan to ruminate on how these technologies inform the social bonds and materiality of fandom, and the complexities of building a world predicated on a fervent love of something distant. Growing up in a small town in Southeast China, Li became (and remains) an ardent fan of My Chemical Romance, a band that introduced the possibility of subcultural belonging as well as the English language into the artist’s life. MCR fandom unfolds as a case study in the exhibition for an examination of distant bodies and displaced desires.`       
        },
        {
            show_id: 4,
            location: `Whitney Museum of American Art`,
            address: `99 Gansevoort St, New York, NY 10014`,
            title: `Whitney Biennial 2024: Even Better Than the Real Thing`,
            opening_date: `March 20`,
            closing_date: `August 11`,
            show_image: 'Whitney.jpg',
            description: `The eighty-first edition of the Whitney Biennial—the longest-running survey of contemporary art in the United States—features seventy-one artists and collectives grappling with many of today’s most pressing issues. This Biennial is like being inside a “dissonant chorus," as participating artist Ligia Lewis described it, a provocative yet intimate experience of distinct and disparate voices that collectively probe the cracks and fissures of the unfolding moment.
            The exhibition’s subtitle, Even Better Than the Real Thing, acknowledges that Artificial Intelligence (AI) is complicating our understanding of what is real, and rhetoric around gender and authenticity is being used politically and legally to perpetuate transphobia and restrict bodily autonomy. These developments are part of a long history of deeming people of marginalized race, gender, and ability as subhuman—less than real. In making this exhibition, we committed to amplifying the voices of artists who are confronting these legacies, and to providing a space where difficult ideas can be engaged and considered. 
            This Biennial is a gathering of artists who explore the permeability of the relationships between mind and body, the fluidity of identity, and the growing precariousness of the natural and constructed worlds around us. Whether through subversive humor, expressive abstraction, or non-Western forms of cosmological thinking, to name but a few of their methods, these artists demonstrate that there are pathways to be found, strategies of coping and healing to be discovered, and ways to come together even in a fractured time.`    
        },
        {
            show_id: 5, 
            location: `Entrance Gallery`,
            address: `48 Ludlow St, New York, NY`,
            title: `Never No Treasure`,
            opening_date: `May 31`,
            closing_date: `June 29`,
            show_image: 'Entrance.jpg',
            description: `Never No Treasure presents new paintings by Erica Newton done in oil on plaster, canvas and paper, showcasing works that begin in an active experimentation with these surfaces. As she paints both en plein air and from the studio, Newton looks to the natural world for her palettes and geometry, using landscape as a ground for both direct representation and abstraction. Rigorous and playful, her process exploits the malleability of material and subject until a piece reaches ‘clarity of sensation and spatial orientation’. Through this compositional problem solving, Newton’s paintings explore the murkiness of material awareness and of relationality between self, world and the work. 
            When painting en plein air, Newton uses torn sheets of acrylic-washed paper to interpret scenes ranging from the Mendocino Coast of Northern California to the lake in Prospect Park,Brooklyn. In the studio, plaster doubles as surface and material as she manipulates the plaster at different stages of the process to create work informed by both deliberation and serendipity. In 'Untitled Landscape 2’, for instance, finger-drawn contours become the loose boundaries for an abstracted landscape, in which the sky is as terraformed as the ground, while in ‘Pile Up’, the plaster retains a swatch of burlap and pieces of ceramic, blurring the line between painting and sculpture. 
            Newton’s collaboration with her materials shows a preoccupation with memory and the palpable but often ineffable nature of dreams and fantasy; she paints in a way that tunes the viewer’s senses toward the familiar yet still unknown. With a curiosity for the generative potential of painting and its limits, Newton’s compositions come to be through a concentrated relationality between materials and ways of knowing, engaging in this process to see what gets born, what is communicated along the way and what remains just out of reach. `
        },
        {
            show_id: 6,
            location: `Silke Lindner`,
            address: `48 Ludlow St, New York, NY`,
            title: `Passages`,
            opening_date: `May 3`,
            closing_date: `June 8`,
            show_image: 'Silke.jpg',
            description: `Silke Lindner is excited to announce the first New York solo exhibition with New Haven-based, Los Angeles-born artist Gozié Ojini. Working primarily in sculpture and installation, Ojini employs careful gestures with found objects, exploring their historical significance within shifting cultures and systems of value. In this exhibition, his sculptures are entirely composed of piano parts. Broken down, gutted and disassembled, they contemplate formal qualities, material and modes of accessibility. Accentuating the objects’ emotional resonance held throughout their passage, Ojini meditates on memory, inheritance, and Black life in America.
            Channeling the language of sampling in music production - the reuse and manipulation of parts of existing sound recordings - Ojini adapts tools and techniques like cutting and chopping to dissect and restructure fragments of the piano. In music, the act of sampling, pulling riffs and bridges, can fill gaps between genres and generations through the memories their fragments hold. Expanding upon this ‘preservative gesture’, Gozié Ojini’s work translates the sonic into the physical. After dismantling the piano by hand, cutting with pull saws, angle grinders, or water-jet, the result is a silent sculptural installation coded with synesthesia and a tactile memory of a cacophonous process.`                
        },
        {
            show_id: 7,
            location: `No Gallery`,
            address: `105 Henry St. #4 NYC NY 10002`,
            title: `When you can no longer speak, sing me a song.`,
            opening_date: `May 30`,
            closing_date: `June 29`,
            show_image: 'Ben.jpg',
            description: '"In writing this, in surviving these events, and in documenting them, I have tried to heed the call of the wild gods. I have been guided by the southern star. For I am the bard, I am the scribe, I am the one who writes time. The history I have only just begun to record is one of atrocity, of a war being waged by a group of airsoft LARPers across a desolate American landscape — one that is ravaged by a familiar plague, a sickness that is both of the past, ongoing in the present, and to the future. A mythology of great warriors upon a distant planet whose name has been forgotten — whose exact location lost to history. Theirs is a planet completely consumed by extreme ideology, in the darkness of total objectivity, where there is no hope for the future or for the self, where everything is known and there is nothing left to be understood, where there is no joy left to seek, and thus no art left to create. These few brave men were devoured long ago by an obsession to become like the gods — a sort of final, desperate effort. They are engaged in a war for personal identity and its rite. For only a god is granted the divine privilege of true creation — of making something irrefutably new, a capability these men have referred to as the “ultra-art” or “total sculpture”. Upon this planet, the LARP has become the new readymade — a strange occurrence brought about by 10,000 years of dark age, of war and pestilence as a result of the eradication of any and all intellectuals, artists, and poets by the state. No one can remember when the war started or what it is that they are fighting for, for the people of this world do not care for nuance or meaning, all they see in the fog of dawn, all that is illuminated as the sun begins to rise, is the gift of a righteous battle, and thus an open gate to heaven. Each day as they awake anew in that place, that pit, with starlight upon their grimy faces, they give thanks for a once again and seemingly final chance at becoming like gods in their earthly domain — for they dare not look to the future, only to the past and to what has been known. To them each day is a precipice, for tomorrow they will descend into babble. As the last remaining artist upon this planet, it is my duty to construct meaning, my moral obligation to seek out that which is still left to be understood: the remainder of a time before. I have transcribed here the nature of what these events were, events which are still not known, and the strange occulture that surrounds them. For it is my LARP, my light in its abyss." - Ben Werther'
        },
        {
            show_id: 8,
            location: `MoMA, Floor 6`,
            address: `11 W 53rd St, New York, NY 10019`,
            title: `Good Night Good Morning`,
            opening_date: `April 30`,
            closing_date: `July 6`,
            show_image: 'Moma.jpg',
            description: `“I didn’t see a major difference between a poem, a sculpture, a film, or a dance,” Joan Jonas has said. For more than five decades, Jonas’s multidisciplinary work has bridged and redefined boundaries between performance, video, drawing, sculpture, and installation. The most comprehensive retrospective of the artist’s work in the United States, Joan Jonas: Good Night Good Morning traces the full breadth of her career, from works that explore the encounter between performance and technology to recent installations about ecology and the landscape.
            Jonas began her decades-long career in New York’s vibrant Downtown art scene of the 1960s and ’70s, where she was one of the first artists to work in performance and video. Drawing influence from literature, Noh and Kabuki theater, and art history, her early experimental works probed how a given element—be it distance, mirrors, the camera, or even wind—could transform one’s perception.
            Joan Jonas: Good Night Good Morning presents drawings, photographs, notebooks, oral histories, film screenings, performances, and a selection of the artist’s installations. Jonas continues to produce her most urgent work through immersive multimedia installations that address climate change and kinship between species. “Despite my interest in history,” she has said, “my work always takes place in the present.”`,
            
        },
        {
            show_id: 9, 
            location: `Artists Space`,
            address: `11 Cortlandt Alley, New York, NY 10013`,
            title: `Doris Guo, Matthew Langan-Peck, Isabelle Frances McGuire, Ruben Ulises Rodriguez Montoya`,
            opening_date: `May 23`,
            closing_date: `August 10`,
            show_image: `ArtistsSpace.jpg`
        },
        {
            show_id: 10,
            location: `Chapter NY`,
            address: `60 Walker Street, New York, NY 10013`,
            title: `Jesse Darling`,
            opening_date: `July 11`,
            closing_date: `August 23`,
            show_image: `Chapter.jpg`
        },
        {
            show_id: 11,
            location: `Farschou New York`,
            address: `148 Green Street, Brooklyn, NY 11222`,
            title: `Exorcism of the Last Painting I Ever Made`,
            opening_date: `October 21`,
            closing_date: `July 14`,
            show_image: `Farschou.jpeg`,
            description: `After a traumatic period in the early 90s with two abortions, Tracey Emin could not physically stand the thought of painting and wanted to face her troubled relationship with the medium. Through fish-eye lenses in the exterior walls of the room, visitors could follow glimpses of Emin’s process. The entire collection of artworks and objects in the room were preserved as an installation, which are all exhibited here in their original constellation.
            The paintings and drawings that Emin created in the process refer to and appropriate works by male artists Egon Schiele, Yves Klein, Edvard Munch, and Pablo Picasso. Historically, women’s access to the artist’s studio have been as models, not artists. The representation of women has been a male affair, where the female nude stands out as the most distinct example of the objectification of the female body. Further, Emin documented the performance in the photographic series The Life Model Goes Mad, in which she takes on the role of the model in her own studio, reclaiming female identity and sexuality.
            Exorcism of the Last Painting I Ever Made stands out as a pivotal work and predecessor to a line of works, in which Emin uses her own life, trauma, and emotions as a means of expression, with the most widely recognized piece being My Bed (1998). In this work, Emin positions herself in the double role as both model and artist, challenging the universal acceptance of women as objects of the male gaze.
            Fueled unapologetically by the intimate and personal, Emin offers up universal themes of love, loss, desire, and grief, the constructs of self and the female experience.
            This exhibition at Faurschou New York marks the first time that this seminal work of art is exhibited in the United States.`
            
        }
    ])
}