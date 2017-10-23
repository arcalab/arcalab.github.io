/*
supported fields:
 - title    - of the paper
 - authors  - of the paper
 - venue    - where the paper was presented
 - publisher - where the paper was published
 - volume   - volume number
 - pages    - of the paper
 - date     - when the talk takes/took place
 - paper    - link to the paper
 - doi      - doi of the paper
 - bibtex   - bibtex link
*/

var AM  = '<a href="http://alfa.di.uminho.pt/~madeira/">Alexandre Madeira </a>'
var CT  = '<a href="http://haslab.uminho.pt/ctavares/">Carlos Tavares </a>'
var GC  = '<a href="http://haslab.uminho.pt/mgc/">Guillermina Cledou </a>'
var JNO = '<a href="http://www.di.uminho.pt/~jno">José Nuno Oliveira </a>'
var JP  = '<a href="http://jose.proenca.org">José Proença </a>'
var LG  = '<a href="http://haslab.uminho.pt/lgomes/">Leandro Gomes </a>'
var LSB = '<a href="http://www.di.uminho.pt/~lsb">Luís Barbosa </a>'
var RN  = '<a href="http://alfa.di.uminho.pt/~nevrenato/">Renato Neves </a>'

var publications = {
      2017: [
        { "authors": JP+" and Dave Clarke"
        , "title" : "Typed Connector Families and their semantics"
        , "venue" : "Science of Computer Programming"
        , "doi" : "10.1016/j.scico.2017.03.002"
        , "paper" : "http://jose.proenca.org/papers/connector-families/scp-cfam.pdf"},
        { "authors": GC
        , "title" : "IFTA"
        , "venue" : "FSEN"},
        { "authors": RN
        , "title" : "Hybrid Automata"}
      ]
    , 2016: [
        { "authors": GC
        , "title" : "IFTA"
        , "venue" : "FSEN"},
        { "authors": RN
        , "title" : "Hybrid Automata"}
      ]
    , 2015: [
        { "title" : "Typed Connector Families"
        , "authors" :  JP+" and Dave Clarke"
        , "venue": "Formal Aspects of Component Software (FACS)"
        , "publisher": "Lecture Notes in Computer Science (LNCS)"
        , "volume" : "9539"
        , "pages": "294-311"
        , "doi": "10.1007/978-3-319-28934-2_16"
        , "bibtex": "http://dblp.uni-trier.de/rec/bibtex/conf/facs2/ProencaC15"
        , "paper": "http://jose.proenca.org/papers/featurenets.pdf"},
        // 
        { "authors": GC+", "+JP+", and "+LSB
        , "title" : "IFTA"
        , "venue" : "FSEN"},
        // 
        { "authors": RN
        , "title" : "Hybrid Automata"}
      ]
};

