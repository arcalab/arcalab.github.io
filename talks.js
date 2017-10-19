/*
supported fields:
 - date     - when the talk takes/took place
 - title    - of the talk
 - author   - who gave the talk
 - alink    - website of the author (without "http://")
 - slides   - link for the slides (full or relative url)
 - location - where the talk takes/took place
*/

var nextTalks = [{
    "title": "tba"
}];
var prevTalks = [{
    "date":"30 Nov 2016",
    "author":"Guillermina Cledou",
    "title": "Composing families of Timed Automata",
    "alink": "haslab.uminho.pt/mgc/",
    "slides": "content/ifta.pdf"
  },{
    "date":"19 Outubro 2016",
    "author":"Allberson Dantas",
    "title": "Modelling SAFeSWF - a practical distributed workflow"
  },{
    "date":"13 July 2016",
    "author": "José Nuno Oliveira",
    "alink": "www.di.uminho.pt/~jno",
    "title": "On the 'divide & conquer' metaphor — the 'quinta essentia' of programming",
  },{
    "date":"25 May 2016",
    "author": "Carlos Tavares",
    "alink": "haslab.uminho.pt/ctavares",
    "title": "Quantum measurements without sums, from Coecke & Pavlovic",
  },{
//     "date":"13 Apr 2016",
//     "author": "Renato Neves",
//     "alink": "alfa.di.uminho.pt/~nevrenato",
//     "title": "Monad H at work",
//     "location": "Room DI.2.13 @ 14h00"
//   },{
    "date":"9 Mar 2016",
    "author": "Leandro Gomes",
    "title": "Research on a generalised KAT via Prover9 ",
//     "location": "Room DI.2.13 @ 14h30"
  },{
    "date":"17 Fev 2016",
    "author": "José Nuno Oliveira",
    "alink": "www.di.uminho.pt/~jno",
    "title": "Towards a Linear Algebra Semantics for SQL",
    "slides": "content/jno-linearAlgebraForSQL.pdf"
//     "location": "Given at <a href=\"http://haslab.uminho.pt/infoblender/\">InfoBlender</a> @ 13h30"
  },{
    "date":"3 Fev 2016",
    "author": "Gillermina Cledou",
    "alink": "haslab.uminho.pt/mgc/",
    "title": "An ontology for licensing public transport services"
//     "location": "Room DI.2.13 @ 14h30"
  },{
    "date":"27 Jan 2016",
    "author": "Carlos Tavares",
    "alink": "haslab.uminho.pt/ctavares/",
    "title": "Quantum algorithms and Foundations: A general introduction",
    "slides": "content/QuantumIntroduction.pdf"
//     "location": "Room DI.2.13 @ 14h00"
  },{
    "date":"13 Jan 2016",
    "author": "Renato Neves",
    "alink": "alfa.di.uminho.pt/~nevrenato",
    "title": "Coalgebraic Hybrid Automata",
//     "location": "Room DI.2.13 @ 14h45"
  },{
    "date":"2 Dec 2015",
    "author": "Alexandre Madeira",
    "alink": "alfa.di.uminho.pt/~madeira",
    "title": "From Abstract Requirements to Processes in the Same Logic",
//     "location": "Talk: 14:00 - 14:30 @ A1, DI. Meeting: 14:30 - 15:30 @ 2.13, DI"
  },{
    "date": "19 Nov 2015",
    "author": "José Proença",
    "link": "jose.proenca.org", 
    "title": "Typed Connector Families (and more)",
    "slides": "content/TypedConnectorCalculus.pdf"
}];
