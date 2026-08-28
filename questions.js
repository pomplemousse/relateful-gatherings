/* ============================================================
   Relateful — the question library behind /what-is-relateful
   ------------------------------------------------------------
   This file is the whole content model. The page renders itself
   from TOPICS and QUESTIONS, so adding to the knowledge base
   never means touching the layout.

   To add a question, drop a new object into QUESTIONS:

     {
       topic:   which topic id it belongs to (see TOPICS below)
       id:      a short kebab-case slug — becomes its #link
       q:       the question, as a person would actually ask it
       short:   ONE sentence. Someone who reads only this should
                still come away with something true.
       example: optional — what it sounds like out loud
       deep:    optional HTML — the "tell me more" layer
       related: optional list of other question ids
     }

   Order within a topic is just the order here. Nothing else
   needs to change.
   ============================================================ */

const TOPICS = [
  { id:'start-here',       label:'Start Here',       blurb:'If you’ve never done this before, start with these six.' },
  { id:'the-practice',     label:'The Practice',     blurb:'The handful of skills the whole thing is built on.' },
  { id:'when-it-gets-real',label:'When It Gets Real',blurb:'Discomfort, activation, and the parts nobody puts on a flyer.' },
  { id:'how-we-know',      label:'How We Know',      blurb:'What you’re actually experiencing, and the meaning you make of it.' },
  { id:'go-deeper',        label:'Go Deeper',        blurb:'The quieter layer underneath the skills. Not required reading.' },
  { id:'should-i-come',    label:'Should I Come?',   blurb:'The practical worries, answered straight.' }
];

const QUESTIONS = [

  /* ---------------------------------------------------------- START HERE */
  {
    topic:'start-here', id:'what-is-relateful',
    q:'What is Relateful?',
    short:'A practice of being here, with other people.',
    example:'“We practice noticing what’s happening in us, and staying connected while we say it.”',
    deep:`<p>Most of us are good at one half of this. We can go inward — meditate, journal, feel our
      feelings — but alone. Or we can stay attentive to other people, read the room, keep things
      pleasant — but lose track of ourselves doing it.</p>
      <p>Relateful is the practice of doing both at once: staying aware of your own experience
      <em>and</em> staying in contact with the person in front of you. It sounds modest. It’s
      surprisingly hard, and it’s trainable.</p>`,
    related:['what-do-i-do','why-practice','is-this-therapy-or-sharing']
  },
  {
    topic:'start-here', id:'what-do-i-do',
    q:'What do I actually do?',
    short:'Notice what’s happening. Say what’s happening. Stay connected.',
    example:'“I feel nervous saying this.” · “When you looked away, I felt a little disappointment.”',
    deep:`<p>That’s genuinely it. You notice something — a tightness, a pull toward someone, an urge to
      fill the silence — and you say some of it out loud, in the room, while it’s still happening.</p>
      <p>You might notice that you’re nervous. That you want someone to like you. That you’re pulling
      away. That you suddenly feel warmth toward a person you just met. None of that is a performance
      or a confession. It’s just reporting the weather.</p>
      <p>Not analysis. Not storytelling. Not self-improvement. Just noticing and sharing what is
      happening now.</p>`,
    related:['what-is-awareness','what-is-disclosure','sounds-like']
  },
  {
    topic:'start-here', id:'what-happens-in-a-gathering',
    q:'What happens in a gathering?',
    short:'Six to twelve of us sit in a circle for ninety minutes and practice this together.',
    example:'“We might land in the room, check in, follow what’s alive, and see what happens.”',
    deep:`<p>I open with an invitation — usually something simple that helps everyone arrive. From
      there we drop into present-moment experience and share from right there. Sometimes that’s the
      whole group. Sometimes it’s pairs. Often there are long pauses, and those turn out to be the
      good part.</p>
      <p>There’s no curriculum and nobody gets analysed, coached, or fixed. Most of an evening is
      people saying fairly ordinary true things and everyone else staying with it instead of moving
      past it. That sounds small written down. In a room it doesn’t feel small.</p>`,
    related:['first-gathering','what-if-i-dont-know-what-to-say','logistics']
  },
  {
    topic:'start-here', id:'do-i-need-to-know-anything',
    q:'Do I need to know anything beforehand?',
    short:'No. Curiosity and a willingness to show up is the whole entry requirement.',
    example:'“You don’t have to know what you’ll say. You just have to be willing to be here.”',
    deep:`<p>Nothing on this page is required reading. It’s here because some people like to know what
      they’re walking into, and that’s a completely reasonable way to be.</p>
      <p>If you’d rather arrive knowing nothing, that works too — arguably better. The practice gets
      explained in the room, in the moment, by doing it.</p>`,
    related:['what-if-im-shy','first-gathering']
  },
  {
    topic:'start-here', id:'is-this-therapy-or-sharing',
    q:'Is this therapy, or a sharing circle?',
    short:'Neither. Nobody here is being treated, and nobody is taking turns delivering monologues.',
    example:'“It’s not about advice. It’s about awareness, connection, and discovery.”',
    deep:`<p>It isn’t therapy: this is a practice space, educational rather than diagnostic or
      therapeutic. I’m a guide, not a therapist, and I won’t prescribe choices for you. We stay
      present together, trusting you’re already whole rather than broken and needing fixing.</p>
      <p>It isn’t a sharing circle either. In a sharing circle you take a turn and say your piece
      while others listen. Here, the interesting material is usually what’s happening <em>between</em>
      people while someone speaks — and that gets said too.</p>`,
    related:['is-it-meditation','who-is-this-for','why-practice']
  },
  {
    topic:'start-here', id:'why-practice',
    q:'Why do people practice this?',
    short:'Because it changes how you relate — to yourself, to people, and to what’s in front of you.',
    example:'“I feel rich in connection now, in a way I didn’t know was available.”',
    deep:`<p>The honest answers people give tend to be plain. They’re tired of performing. They have a
      meditation practice that helped and was lonely. They want friendships with more truth in them.
      They noticed they can be in a room full of people and still be managing an impression the whole
      time.</p>
      <p>What tends to change first isn’t dramatic — you catch yourself performing a beat earlier
      than you used to. Then you catch it during, instead of after. That’s most of it.</p>`,
    related:['what-is-relateful','patterns','who-is-this-for']
  },

  /* -------------------------------------------------------- THE PRACTICE */
  {
    topic:'the-practice', id:'basic-skills',
    q:'What are the basic skills?',
    short:'Tracking your present-moment experience while staying in relationship.',
    example:'“Can I stay aware of what’s happening in me and stay connected with you at the same time?”',
    deep:`<p>Most people do one of two things. They leave themselves and focus on the other person —
      <em>how are they feeling, what do they think of me?</em> Or they leave the relationship and go
      inward — <em>I’m having feelings, but I’m no longer connected to you.</em></p>
      <p>Relateful invites a third option: both at once. That sounds simple. It’s surprisingly
      difficult, and it’s the thing every other skill here serves.</p>
      <p>Five supporting skills tend to emerge as people practise: awareness, disclosure, ownership,
      curiosity, and staying.</p>`,
    related:['what-is-awareness','what-is-disclosure','what-is-ownership','what-is-curiosity','what-is-staying']
  },
  {
    topic:'the-practice', id:'what-is-awareness',
    q:'What is awareness?',
    short:'Noticing what’s happening in your body, emotions, thoughts, impulses, and attention.',
    example:'“My chest feels tight.” · “I notice I’m trying to impress you right now.”',
    deep:`<p>Awareness is the raw material. Before you can share anything true, you have to catch it —
      and most of what’s happening in us goes by unnoticed, especially in company.</p>
      <p>It includes the unflattering stuff: wanting to be liked, comparing yourself, being bored,
      wishing someone would stop talking. Those aren’t failures of practice, they’re the practice
      finding something.</p>`,
    related:['attention','what-is-disclosure','presence']
  },
  {
    topic:'the-practice', id:'what-is-disclosure',
    q:'What is disclosure?',
    short:'Letting some of your experience become visible. Not all of it — enough to be seen.',
    example:'“I feel nervous saying this.”',
    deep:`<p>Disclosure is not confession, and it isn’t an obligation to be maximally exposed. It’s
      choosing to let a piece of what’s true in you show up in the room where someone else can meet it.</p>
      <p>You get to choose how much. A single accurate sentence usually does more than a paragraph.</p>`,
    related:['do-i-have-to-be-vulnerable','what-is-ownership','sounds-like']
  },
  {
    topic:'the-practice', id:'what-is-ownership',
    q:'What is ownership?',
    short:'Saying “I feel hurt” rather than “you hurt me.” The focus stays on your experience.',
    example:'“I felt a wave of hurt when that happened” — not “you were being dismissive.”',
    deep:`<p>The difference is small on the page and enormous in a room. One is a report from inside
      you, which nobody can argue with. The other is a claim about someone else, which they now have
      to defend or accept.</p>
      <p>Ownership isn’t politeness or hedging. It’s accuracy — you actually do have better access to
      your own experience than to anyone’s motives.</p>`,
    related:['direct-vs-interpretation','what-is-disclosure']
  },
  {
    topic:'the-practice', id:'what-is-curiosity',
    q:'What is curiosity?',
    short:'Becoming interested in what’s happening instead of immediately fixing, defending, or explaining it.',
    example:'“Huh — something just closed in me. I don’t know what that is yet.”',
    deep:`<p>The reflex when something uncomfortable shows up is to do something about it: justify it,
      solve it, make it mean something, make it go away. Curiosity is the choice to look at it a
      little longer first.</p>
      <p>It’s also what makes this bearable. If everything that arises is information rather than a
      verdict on you, there’s much less to manage.</p>`,
    related:['welcoming','what-is-staying','nothing-has-to-be-different']
  },
  {
    topic:'the-practice', id:'what-is-staying',
    q:'What is staying?',
    short:'Remaining present when it gets uncomfortable. This is usually the hardest one.',
    example:'“I want to change the subject right now, and I’m not going to yet.”',
    deep:`<p>Almost everyone has a well-practised exit: a joke, a subject change, an explanation, going
      quiet, going analytical, getting helpful. Staying is noticing the exit and not taking it — or
      taking it, and saying that you did.</p>
      <p>Staying doesn’t mean enduring. There’s a real difference between discomfort you can be
      curious about and being genuinely flooded, and the practice includes knowing which one you’re in.</p>`,
    related:['what-if-i-cant-stay-present','what-if-i-get-triggered','window-of-tolerance']
  },
  {
    topic:'the-practice', id:'presence',
    q:'What does presence actually mean here?',
    short:'Knowing where your attention is, and knowing that you’re the one placing it there.',
    example:'“I am aware of where my attention is right now.” — Annabeth',
    deep:`<p>The fuller version: <em>am I aware that this is what I’m doing right now — that I’m
      choosing for my attention to be on this thing, as opposed to anywhere else? If I’m aware of
      that, I’m in presence.</em></p>
      <p>Which means presence isn’t a special serene state you have to achieve. You can be present
      while anxious, bored, or irritated. The question is only whether you know where you are.</p>`,
    related:['attention','what-pulls-you-away','what-is-awareness']
  },
  {
    topic:'the-practice', id:'what-pulls-you-away',
    q:'What pulls me out of presence?',
    short:'Story, analysis, the future, the past, and protection. All useful. All somewhere else.',
    example:'“This always happens to me.” · “The reason you’re doing that is…” · “What does this mean for us?”',
    deep:`<p>Five familiar moves, and everyone has a favourite:</p>
      <ul>
        <li><strong>Story</strong> — “this always happens to me.”</li>
        <li><strong>Analysis</strong> — “the reason you’re doing that is…”</li>
        <li><strong>Future</strong> — “what does this mean for our friendship?”</li>
        <li><strong>Past</strong> — “this reminds me of last year.”</li>
        <li><strong>Protection</strong> — rehearsing what to say, managing impressions, defending against hurt.</li>
      </ul>
      <p>None of these are wrong. They’re just not <em>here</em>. Which is why the questions that come
      up in a flow tend to sound like: what’s happening in your body as you say that? What’s it like
      to hear me say this? What just shifted?</p>`,
    related:['presence','direct-vs-interpretation','patterns']
  },
  {
    topic:'the-practice', id:'sounds-like',
    q:'What does it sound like out loud?',
    short:'Short, ordinary, slightly exposing sentences about right now.',
    example:'“As you speak, I notice myself relaxing.” · “I feel warmth toward you.” · “I’m confused.”',
    deep:`<p>A beginner version is genuinely this plain: <em>I feel nervous saying this. When you
      looked away, I felt a little disappointment. I notice I’m trying to impress you right now.</em></p>
      <p>People often expect it to require eloquence. It requires the opposite — the sentences that
      land are usually the least composed ones.</p>`,
    related:['what-do-i-do','what-if-i-dont-know-what-to-say']
  },

  /* --------------------------------------------------- WHEN IT GETS REAL */
  {
    topic:'when-it-gets-real', id:'what-if-i-get-triggered',
    q:'What if I get triggered?',
    short:'That’s not a sign you’re doing it wrong. It’s often a sign you’ve arrived.',
    example:'“I’m noticing a lot of activation right now.”',
    deep:`<p>Relational practice brings people right up against the places where their nervous system
      learned about belonging, rejection, visibility, care, shame, or safety. The useful question
      isn’t “how do I stop getting triggered?” — it’s “what do I do once I notice I’m activated?”</p>
      <p>A simple protocol:</p>
      <ul>
        <li><strong>Notice and name it.</strong> “My chest is getting tight.” “I’m feeling flooded.”
          Naming is already regulating — you’ve moved from being inside the experience to also
          observing it.</li>
        <li><strong>Slow down.</strong> Most people speed up. Try the opposite: a breath, your feet,
          the chair holding you. The goal isn’t to make the feeling go away — it’s to widen awareness
          enough that the feeling isn’t the entire universe.</li>
        <li><strong>Stay with direct experience.</strong> Instead of “you don’t care about me,” try
          “when that happened, I felt a wave of hurt.”</li>
        <li><strong>Ask for support.</strong> This isn’t a solo endurance test. “Can we slow down?”
          “I need some help navigating this.”</li>
        <li><strong>Take a break if you’re outside your window.</strong> Often more relational than
          pushing through.</li>
      </ul>
      <p>The goal isn’t to become untriggerable. It’s to stay in enough relationship — with yourself
      and with the other person — that the trigger becomes something you can explore rather than
      something that takes over.</p>`,
    related:['window-of-tolerance','what-is-staying','what-if-i-cant-stay-present']
  },
  {
    topic:'when-it-gets-real', id:'dont-know-what-im-feeling',
    q:'What if I don’t know what I’m feeling?',
    short:'Then say that. “I don’t know what I’m feeling” is a completely accurate report.',
    example:'“Something’s happening and I can’t name it yet.”',
    deep:`<p>Confusion is an experience like any other. So is blankness, so is “there are three things
      at once and I can’t separate them.”</p>
      <p>If you want somewhere to start, drop below the naming: what’s the physical sensation? Warm,
      tight, buzzing, heavy, nothing? Sensation is usually available even when emotion isn’t.</p>`,
    related:['feel-nothing','what-is-awareness']
  },
  {
    topic:'when-it-gets-real', id:'feel-nothing',
    q:'What if I feel nothing?',
    short:'Numbness is something. It counts, and it’s worth saying.',
    example:'“I notice I feel kind of flat right now, and a bit self-conscious about that.”',
    deep:`<p>Presence doesn’t require an interesting or positive experience. Numbness, boredom,
      disconnection and flatness are all part of what’s actually happening — and naming them is often
      the moment something else starts moving.</p>
      <p>Also worth knowing: numbness is frequently protection doing its job. It doesn’t need to be
      pushed through. It can just be noticed.</p>`,
    related:['nothing-has-to-be-different','dont-know-what-im-feeling']
  },
  {
    topic:'when-it-gets-real', id:'what-if-im-angry',
    q:'What if I’m angry?',
    short:'Anger is welcome here. Acting it out without awareness is where practice stops.',
    example:'“I notice heat in my chest and an impulse to argue with you.”',
    deep:`<p>Feelings people call negative — anger, boredom, frustration, contempt — are part of you
      too, and this practice makes room for them. Noticing them as they arise is exactly what gives
      you a choice instead of being driven by them unconsciously.</p>
      <p>There’s a real difference between feeling something and acting on it without awareness. The
      first is the practice. The second is where you start to leave it.</p>`,
    related:['what-if-i-dont-like-someone','what-is-curiosity']
  },
  {
    topic:'when-it-gets-real', id:'want-to-leave',
    q:'What if I want to leave?',
    short:'You can. And the wanting is worth saying out loud first, if you can manage it.',
    example:'“I’m noticing I want to be anywhere but here right now.”',
    deep:`<p>You’re a free agent here — you can step back, go quiet, step out of the room, or leave. No
      one will chase you and nothing is owed.</p>
      <p>That said, the impulse to leave is often the most alive thing in the room at that moment.
      Saying “I want to leave” while staying for one more breath is frequently where something turns.
      Frequently — not always. You’re the judge.</p>`,
    related:['window-of-tolerance','what-is-staying','safety']
  },
  {
    topic:'when-it-gets-real', id:'what-if-i-dont-like-someone',
    q:'What if I don’t like someone in the room?',
    short:'Also information. You don’t have to perform warmth you don’t feel.',
    example:'“I notice I’ve been avoiding looking at you, and I don’t fully know why.”',
    deep:`<p>One of the odder discoveries in this practice is how often dislike turns out to be
      something else wearing a costume — envy, a projection, something they remind you of, or just
      the fact that they’re doing a thing you don’t let yourself do.</p>
      <p>You’re not required to investigate that, and definitely not required to announce it. But
      noticing it beats pretending it away.</p>`,
    related:['patterns','what-is-ownership','direct-vs-interpretation']
  },
  {
    topic:'when-it-gets-real', id:'really-vulnerable',
    q:'What if I feel really vulnerable?',
    short:'Then you’re probably close to something real. You still get to choose how much you show.',
    example:'“I feel exposed right now and I need a second.”',
    deep:`<p>Vulnerability here isn’t a target to hit. There’s no prize for the most exposed share, and
      a group that rewards that is doing something else.</p>
      <p>Naming the vulnerability itself — “this feels like a lot to say” — is usually enough. It
      lets people meet you without requiring you to hand over more than you meant to.</p>`,
    related:['do-i-have-to-be-vulnerable','safety','what-is-disclosure']
  },
  {
    topic:'when-it-gets-real', id:'what-if-i-cant-stay-present',
    q:'What if I can’t stay present?',
    short:'Nobody stays present continuously. Noticing that you left is the same skill.',
    example:'“I just realised I’ve been miles away for the last few minutes.”',
    deep:`<p>Attention wanders constantly — that isn’t a flaw in you, it’s what attention does. The
      practice isn’t an unbroken beam of presence. It’s the return.</p>
      <p>Catching yourself rehearsing, drifting, or planning your exit and saying so <em>is</em> the
      move. It’s not a confession of failure; it’s the thing working.</p>`,
    related:['presence','attention','window-of-tolerance']
  },
  {
    topic:'when-it-gets-real', id:'window-of-tolerance',
    q:'How do I know if I’m past my limit?',
    short:'When you can’t think clearly, can’t track the other person, or feel trapped — that’s flooded, not activated.',
    example:'“I’m too activated to stay in connection right now.”',
    deep:`<p>Signs you’re beyond your window: inability to think clearly, feeling trapped, overwhelming
      urgency, dissociation or numbness, losing track of the other person entirely.</p>
      <p>At that point the most skilful move is usually to say so and take a break. Stepping out is
      often more relational than pushing through — you’re staying honest about where you actually are.</p>`,
    related:['what-if-i-get-triggered','safety','want-to-leave']
  },

  /* ---------------------------------------------------------- HOW WE KNOW */
  {
    topic:'how-we-know', id:'direct-vs-interpretation',
    q:'What’s the difference between direct experience and interpretation?',
    short:'“My chest feels tight” is direct experience. “You don’t care about me” is interpretation.',
    example:'Direct: “My hands are shaking.” · Interpretation: “You’re afraid of intimacy.”',
    deep:`<p><strong>Direct experience</strong> is what you’re immediately aware of right now —
      sensations, emotions, desires, impulses, images. <em>My chest feels tight. I notice sadness. I
      want to move closer. I feel warmth toward you.</em></p>
      <p><strong>Interpretation</strong> is the meaning you make about it. <em>You’re avoiding me.
      You don’t trust me. You’re trying to control this conversation.</em></p>
      <p>The practical difference: direct experience is hard to dispute. If I say my hands are
      shaking, there’s little room for argument. If I say you’re afraid of intimacy, we’ve entered
      different territory — and now you have to respond to a claim about you.</p>
      <p>Neither is forbidden. The practice is learning to notice which territory you’re standing in.</p>`,
    related:['is-interpreting-wrong','what-gives-rise','what-is-ownership']
  },
  {
    topic:'how-we-know', id:'is-interpreting-wrong',
    q:'Is interpreting wrong, then?',
    short:'No. Humans make meaning; that’s not a defect. It’s just not the same as experiencing.',
    example:'“I’m aware I’ve built a whole story about that pause.”',
    deep:`<p>Storytelling, coaching, advice, teaching, analysis and meaning-making are all valuable
      forms of expression, and they generate real insight. Relateful doesn’t ask you to stop
      interpreting.</p>
      <p>It asks you to spend a bit more time in direct experience before drawing conclusions — to
      give the moment enough space that your understanding comes from what’s actually happening,
      rather than only from old patterns, fears, or hopes.</p>`,
    related:['direct-vs-interpretation','what-gives-rise','what-pulls-you-away']
  },
  {
    topic:'how-we-know', id:'what-gives-rise',
    q:'What is happening in me that gives rise to this interpretation?',
    short:'The single most useful question in the practice.',
    example:'“I decided you were bored. Underneath that, I think I’m afraid of being uninteresting.”',
    deep:`<p>Underneath a story there’s almost always something more immediate — fear, excitement,
      longing, confusion, tenderness, anger, uncertainty. The interpretation is the lid; this question
      lifts it.</p>
      <p>It’s also the least accusatory move available. It keeps you responsible for your own material
      without requiring anyone else to agree with your read of them.</p>`,
    related:['direct-vs-interpretation','what-is-ownership','patterns']
  },
  {
    topic:'how-we-know', id:'attention',
    q:'Where is my attention right now?',
    short:'Awareness includes noticing where attention has gone — not just what you’re feeling.',
    example:'“I realise I’ve been monitoring whether you like me this whole time.”',
    deep:`<p>Worth asking, in the middle of a conversation:</p>
      <ul>
        <li>Am I listening to you?</li>
        <li>Am I monitoring whether you like me?</li>
        <li>Am I rehearsing what I’m going to say?</li>
        <li>Am I absorbed in a story?</li>
        <li>Am I aware that I’m pulling away?</li>
      </ul>
      <p>Most of these are running most of the time in most conversations. Noticing which one is
      running is a large part of what changes.</p>`,
    related:['presence','what-pulls-you-away','patterns']
  },
  {
    topic:'how-we-know', id:'meaning-making',
    q:'What is meaning-making?',
    short:'The jump from what happened to what it means about you, them, or the future.',
    example:'Presence: “I feel sadness.” · Meaning-making: “This means we’re incompatible.”',
    deep:`<p>Meaning-making sounds like: <em>this means you don’t care about me. This means we’re
      incompatible. This means I failed.</em> It arrives so fast it can feel like perception rather
      than conclusion.</p>
      <p>Slowing it down isn’t abandoning discernment or boundaries. It’s giving the present moment
      enough room that your understanding emerges from what’s actually happening.</p>`,
    related:['direct-vs-interpretation','is-interpreting-wrong','waking-up']
  },

  /* ----------------------------------------------------------- GO DEEPER */
  {
    topic:'go-deeper', id:'waking-up',
    q:'What does “waking up” mean here?',
    short:'Becoming aware of the whole living moment — not just what’s inside you.',
    example:'“I’m aware of my nervousness, of you leaning back, and of how quiet the room just got.”',
    deep:`<p>It’s easy to hear “notice your experience” and turn it into a private, internal project.
      The wider invitation is to become aware of the whole thing at once:</p>
      <ul>
        <li>what’s happening in me</li>
        <li>what’s happening with the other person</li>
        <li>what’s happening <em>between</em> us</li>
        <li>where my attention is</li>
        <li>what’s happening around us</li>
      </ul>
      <p>That last layer is the one people usually skip, and it’s often where the room turns.</p>`,
    related:['nothing-has-to-be-different','welcoming','attention']
  },
  {
    topic:'go-deeper', id:'nothing-has-to-be-different',
    q:'Do I need to be having a good experience?',
    short:'No. Nothing has to be different for this to be the practice.',
    example:'“I’m bored, slightly irritated, and here.”',
    deep:`<p>Presence doesn’t require an interesting or elevated state. Numbness, confusion, boredom,
      disconnection, desire, shame, attraction, anger — all of it can be what’s happening.</p>
      <p>This is the part that quietly undoes the self-improvement frame. There’s no better experience
      you’re supposed to be having instead of this one.</p>`,
    related:['feel-nothing','welcoming','what-is-curiosity']
  },
  {
    topic:'go-deeper', id:'welcoming',
    q:'What does “welcoming experience” mean?',
    short:'Letting what’s happening actually be here, instead of managing it.',
    example:'“I’m going to let this be uncomfortable for a moment rather than explain it away.”',
    deep:`<p>Tracking your experience is the first move. Welcoming it is a further one: becoming
      genuinely available to it, rather than immediately trying to fix, suppress, explain, or control
      it.</p>
      <p>Most of us do the managing so automatically it doesn’t feel like a choice. Noticing the
      management is where the choice reappears.</p>`,
    related:['what-is-curiosity','nothing-has-to-be-different','patterns']
  },
  {
    topic:'go-deeper', id:'patterns',
    q:'What are relational patterns?',
    short:'The habitual ways you relate — performing, withdrawing, pleasing, controlling, disappearing.',
    example:'“I notice I’ve been making everyone comfortable for twenty minutes.”',
    deep:`<p>The usual cast: performing, withdrawing, pleasing, controlling, intellectualising,
      defending, seeking approval, disappearing. Most people have two or three they reach for
      reliably, and can’t see while doing them.</p>
      <p>The point isn’t to fix the pattern. First, just wake up to the fact that it’s happening.
      Being able to say “I think I’m performing right now” mid-performance is already an enormous
      change — the pattern stops running the room by itself.</p>`,
    related:['welcoming','attention','what-gives-rise']
  },
  {
    topic:'go-deeper', id:'is-it-meditation',
    q:'Isn’t this just meditation with other people?',
    short:'It shares the attention training. What’s different is that someone is looking back at you.',
    example:'“I could stay present alone. I could not stay present while you were looking at me.”',
    deep:`<p>A lot of people arrive here with a meditation or somatic practice already, and find that
      the skills don’t transfer as cleanly as they expected. Sitting with your own sensation is one
      thing. Doing it while someone watches, responds, and has their own reaction is another.</p>
      <p>That gap is the whole reason this is practised in a room with other people rather than alone
      on a cushion.</p>`,
    related:['is-this-spiritual','what-is-relateful','basic-skills']
  },
  {
    topic:'go-deeper', id:'is-this-spiritual',
    q:'Is this spiritual?',
    short:'No belief system required — just a willingness to be present and honest.',
    example:'“There’s nothing here you have to sign up to.”',
    deep:`<p>The practice draws on contemplative traditions in the same way a lot of attention training
      does, and some people find something genuinely deep here. Others find it a useful, practical
      social skill. Both are fine and neither is the correct reading.</p>
      <p>Nothing on this page asks you to adopt a worldview.</p>`,
    related:['is-this-therapy-or-sharing','is-it-meditation']
  },

  /* ------------------------------------------------------- SHOULD I COME */
  {
    topic:'should-i-come', id:'who-is-this-for',
    q:'Who is this actually for?',
    short:'People who’d rather be real than impressive, and are willing to be a beginner in public.',
    example:'“Small talk drains me before it even starts.”',
    deep:`<p>It tends to land with people who are tired of performing, who have some kind of inner
      practice already and want it to reach their relationships, or who’ve noticed they can spend a
      whole evening managing an impression.</p>
      <p>You need to be 18 or over. Beyond that there’s no type.</p>`,
    related:['is-it-right-for-me','why-practice']
  },
  {
    topic:'should-i-come', id:'do-i-have-to-be-vulnerable',
    q:'Do I have to be vulnerable?',
    short:'No. You’re never required to share, and you can always pass.',
    example:'“I’d like to just listen tonight.”',
    deep:`<p>Passing is a legitimate move, not a failure to participate. Plenty of people spend a first
      evening mostly listening.</p>
      <p>And if you want the technically-true version: saying “I don’t want to share right now” is
      itself a piece of present-moment disclosure. You’re already doing it.</p>`,
    related:['really-vulnerable','what-is-disclosure','what-if-im-shy']
  },
  {
    topic:'should-i-come', id:'what-if-im-shy',
    q:'What if I’m shy?',
    short:'Then say that, and you’ll have done the practice within your first minute.',
    example:'“I’m nervous and I don’t really know what I’m doing here.”',
    deep:`<p>Shyness isn’t an obstacle to this practice — it’s unusually good material. It’s vivid,
      it’s happening right now, and it’s honest.</p>
      <p>Groups are small on purpose: twelve people maximum, so it stays a room rather than an
      audience.</p>`,
    related:['what-if-i-dont-know-what-to-say','do-i-have-to-be-vulnerable','first-gathering']
  },
  {
    topic:'should-i-come', id:'what-if-i-dont-know-what-to-say',
    q:'What if I don’t know what to say?',
    short:'“I don’t know what to say” is a complete and useful sentence here.',
    example:'“I have no idea what to say and I notice I’m scanning for something clever.”',
    deep:`<p>There’s nothing to prepare and no right answer to arrive with. The material is whatever is
      already happening in you when your turn comes round — including blankness, including the search
      for something worth saying.</p>
      <p>There are also long silences, and they’re allowed to just be silences.</p>`,
    related:['sounds-like','dont-know-what-im-feeling','what-if-im-shy']
  },
  {
    topic:'should-i-come', id:'what-if-uncomfortable',
    q:'What if I get uncomfortable?',
    short:'Likely, at some point. Discomfort isn’t a sign something has gone wrong.',
    example:'“This is uncomfortable and I’d like to stay with it.”',
    deep:`<p>Some discomfort is the practice working — you’re doing something socially unusual in front
      of strangers. That’s different from being overwhelmed, and you get to be the judge of which
      you’re in.</p>
      <p>You can slow things down, ask for help, step back, or leave, at any moment, without
      explaining yourself.</p>`,
    related:['what-if-i-get-triggered','window-of-tolerance','safety']
  },
  {
    topic:'should-i-come', id:'safety',
    q:'Who’s responsible for my safety?',
    short:'You are. This is a brave space rather than a safe one, and that’s a deliberate distinction.',
    example:'“I need to step out for a few minutes.”',
    deep:`<p>You’re treated as a free agent, capable of honest self-assessment and your own choices —
      including setting and holding your own boundaries. The facilitator guides the practice; they
      don’t take responsibility for your emotional experience.</p>
      <p>There are firm agreements underneath that: we start and end on time, disagreement is welcome
      while respect is required, zero tolerance for violence, threats or intimidation, and you ask
      before touching someone — every time. Silence or hesitation is a no, not a maybe.</p>`,
    related:['is-it-right-for-me','window-of-tolerance','what-if-uncomfortable']
  },
  {
    topic:'should-i-come', id:'is-it-right-for-me',
    q:'How do I know if it’s right for me right now?',
    short:'You’re the best judge. If this sounds destabilising rather than interesting, sit this one out.',
    example:'“Not this month” is a real and respected answer.',
    deep:`<p>These practices can bring up a lot. If you’re managing mental illness, addiction recovery,
      or significant emotional challenges that this kind of environment could stir up — or if you’re
      not confident you can look after your own needs while you’re here — I’d genuinely rather you
      waited.</p>
      <p>That’s not a door closing. It’s a weekly gathering; it’ll still be here.</p>`,
    related:['safety','who-is-this-for']
  },
  {
    topic:'should-i-come', id:'first-gathering',
    q:'What should I expect at my first one?',
    short:'Arrive at 6:45, sit down, and mostly find it more ordinary than you imagined.',
    example:'“Doors at 6:45, we start at 7, we’re done by 8:30 and people usually stay after.”',
    deep:`<p>Doors open at 6:45 — come early enough to settle. We start at 7 with an invitation and
      land in the room together, practise until 8:30, then there’s an unstructured hangout with no
      hard cutoff.</p>
      <p>Bring water, and a cushion or mat if you’d like to sit on the floor. There are chairs.
      Nobody will single you out, and you won’t be asked to do anything you haven’t agreed to.</p>`,
    related:['what-happens-in-a-gathering','logistics','what-if-im-shy']
  },
  {
    topic:'should-i-come', id:'logistics',
    q:'When, where, and how much?',
    short:'Tuesdays 7–8:30pm at Activation Studios in NoDa. $10–20 sliding scale, ticket in advance.',
    example:'First gathering: Tuesday, September 15.',
    deep:`<p>516 E 15th St, Charlotte, NC 28206. Twelve people maximum, which is what keeps it a
      practice rather than an event.</p>
      <p>Tickets are $10–20 sliding scale, booked in advance — pick whichever tier feels right.
      Tickets aren’t sold at the door, so grab one before you come.</p>`,
    related:['first-gathering','what-happens-in-a-gathering']
  }
];
