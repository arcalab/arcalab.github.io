/*
supported fields:
 - date     - when the talk takes/took place
 - title    - of the talk
 - author   - who gave the talk
 - alink    - website of the author (without "http://")
 - slides   - link for the slides (full or relative url)
 - paper    - link for the paper, if applicable
 - info     - link for more information about the talk, if applicable
 - location - where the talk takes/took place
*/

var AM  = '<a href="http://alfa.di.uminho.pt/~madeira/">Alexandre Madeira </a>'
var CT  = '<a href="http://haslab.uminho.pt/ctavares/">Carlos Tavares </a>'
var GC  = '<a href="http://haslab.uminho.pt/mgc/">Guillermina Cledou </a>'
var JNO = '<a href="http://www.di.uminho.pt/~jno">José Nuno Oliveira </a>'
var JP  = '<a href="http://jose.proenca.org">José Proença </a>'
var LG  = '<a href="http://haslab.uminho.pt/lgomes/">Leandro Gomes </a>'
var LSB = '<a href="http://www.di.uminho.pt/~lsb">Luís Barbosa </a>'
var RN  = '<a href="http://alfa.di.uminho.pt/~nevrenato/">Renato Neves </a>'
var AN  = '<a href="extra/img/photos/an.JPG">Ana Neri</a>'
var AR  = '<a href="extra/img/photos/ar.JPG">Afonso Rodrigues</a>'
var RC  = '<a href="extra/img/photos/rc.jpg">Rúben Cruz</a>'

var nextTalks = [{
}];
var prevTalks = [{
    "date":" 31 July 2018",
    "title": "A Metalanguage for Guarded Iteration",
    "alink": "https://www8.cs.fau.de/sergey",
    "author": "Sergey Goncharov",
    "info": "http://haslab.uminho.pt/infoblender/presentations/metalanguage-guarded-iteration",
    "paper": "https://arxiv.org/pdf/1807.11256",
    // "location": "DI-A2"
    },{
    "date":" 9 July 2018",
    "title": "Validation of Quantum Simulations - Simulation and Tomography with QISKit",
    "author": AR
    // "location": "Sala de Reuniões do DI"
    },{
    "date":" 16 May 2018",
    "title": "Compositional Semantics for New Paradigms: Probabilistic, Hybrid And Beyond",
    "author": RN,
    // "location": "Sala de Reuniões do DI"
    },{
    "date":" 18 Abr 2018",
    "title": "Towards a quantified Hoare Logic",
    "author": LG
    },{
    "date":" 26 Mar 2018",
    "title": "Validation of Quantum Simulations",
    "slides": "content/ValidationOfQuantumSimulations-FCT.pdf",
    "author": AR,
    "location": "Presented at the Workshop of the \"New Talents in Quantum Technologies\" Program, in the Calouste Gulbenkian Foundation"
    },{
    "date":" 16 Mar 2018",
    "title": "Validation of Quantum Simulations",
    "slides": "content/VerifyingQuantumComputations.pdf",
    "author": AR
    // "location": "Meeting room DI @ 11h00"
    },{
    "date":" 16 Mar 2018",
    "title": "Modelling Typed Connectors in mCRL2",
    "slides": "content/TypedConnectorsInMCRL2.pdf",
    "author": RC
    // "location": "Meeting room DI @ 11h00"
    },{
    "date":" 28 Feb 2018",
    "title": "Towards quantamorphisms — some thoughts on (constructive) reversibility",
    "author": AN+" and "+JNO,
    "slides": "content/Quantamorphims.pdf"
    // "location": "Room DI.2.13 @ 14h30"
    },{
    "date":" 7 Feb 2018",
    "title": "Using Coq and Recurrent Neural Network to Model and Verify Timed Connectors",
    "author": "Meng Sun",
    "alink": "http://www.math.pku.edu.cn/teachers/sunm/indexen.html",
    "slides": "content/ms-coq_and_rnn-18.pdf",
    "info":"http://haslab.uminho.pt/infoblender/presentations/using-coq-and-recurrent-neural-network-model-and-verify-timed-connectors"
    },{
    "date":" 24 Jan 2018",
    "title": "Brainstorming - DaLi SI",
    // "location": "Sala de Reuniões"
    },{
    "date":"12 Jan 2018",
    "title": "PLQP & Company: Decidable Logics for Quantum Algorithms (Baltag et al. 2014)",
    "paper": "http://www.vub.ac.be/CLWF/SS/IQSA.proc.v4%20-%20flattened.pdf",
    "author": CT,
    "slides": "content/PLQP_and_company.pdf"
    // "location": "Room A1, DI"
    },{
    "date":"14 Dec 2017",
    "author":"Prof. Einar Broch Johnsen",
    "alink":"http://einarj.at.ifi.uio.no",
    "title": "Resource-Aware Models in ABS",
    "info":"http://haslab.uminho.pt/infoblender/presentations/resource-aware-models-abs",
    // "location": "0.07 (DI-0.03)"
    },{
    "date":"6 Dec 2017",
    "title": "Internal discussions"
//     "location": "Room DI.2.13 @ 14h30"
    },{
    "date":"24 Nov 2017",
    "author":GC,
    "title": "Refinenemt of Families of Timed Automata",
    // "location": "Sala de Reuniões",
    "paper": "http://jose.proenca.org/papers/iftarefinement.pdf"
    },{
    "date":"8 Nov 2017",
    "author":JP+" and "+LSB,
    "title": "Welcome meeting 2017/2018",
    "alink": "jose.proenca.org",
    "slides": "content/opening1718.pdf"
  },{
    "date":"30 Nov 2016",
    "author":"Guillermina Cledou",
    "title": "Composing families of Timed Automata",
    "alink": "haslab.uminho.pt/mgc/",
    "slides": "content/ifta.pdf"
  },{
    "date":"19 Oct 2016",
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
    "date":"17 Feb 2016",
    "author": "José Nuno Oliveira",
    "alink": "www.di.uminho.pt/~jno",
    "title": "Towards a Linear Algebra Semantics for SQL",
    "slides": "content/jno-linearAlgebraForSQL.pdf"
//     "location": "Given at <a href=\"http://haslab.uminho.pt/infoblender/\">InfoBlender</a> @ 13h30"
  },{
    "date":"3 Feb 2016",
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
