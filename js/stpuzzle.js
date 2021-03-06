<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>npuzzle test</title>
    <link href="css/styles.css" rel="stylesheet" media="screen" type="text/css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <style>
  .draggable { width: 90px; height: 90px; padding: 0.5em; float: left; margin: 0 10px 10px 0; }
  #draggable, #draggable2 { margin-bottom:20px; }
  #draggable { cursor: n-resize; }
  #draggable2 { cursor: e-resize; }
  #containment-wrapper { width: 95%; height:150px; border:2px solid #ccc; padding: 10px; }
  h3 { clear: left; }
  </style>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  <script>
  $( function() {
    // $(".cell").draggable({ axis: "y" ,containment: "#containment", scroll: false }) -- this works

    $( "#0-0" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });
    // or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#0-1" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#0-2" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#0-3" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });

    $( "#1-0" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#1-1" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#empty" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#1-3" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });

    $( "#2-0" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#2-1" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#2-2" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#2-3" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });


    $( "#3-0" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#3-1" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#3-2" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });
    $( "#3-3" ).draggable({ axis: "y" ,containment: "#containment", scroll: false });// or // $( "#1-0" ).draggable({ axis: "x" });

  } );

  </script>
</head>
<body>
 

 

<div class="board-container">
    
    <div class="grid-container"> 
    <h2>GRID</h2>
      <div class="grid start" id="containment">
        <div class="board-row">
           <div class="cell" id="0-0" data-location="0,0"><span>15</span></div>
           <div class="cell" id="0-1" data-location="0,1"><span>14</span></div>
           <div class="cell" id="0-2" data-location="0,2"><span>13</span></div>
           <div class="cell" id="0-3" data-location="0,3"><span>12</span></div> 
        </div>

         <div class="board-row">
           <div class="cell" id="1-0" data-location="1,0"><span>11</span></div>
           <div class="cell" id="1-1" data-location="1,1"><span>10</span></div>
           <div class="cell" id="empty" data-location="1,2"><span></span></div>
           <div class="cell" id="1-3" data-location="1,3"><span>8</span></div>   
        </div>

         <div class="board-row">
           <div class="cell" id="2-0" data-location="2,0"><span>7</span></div>
           <div class="cell" id="2-1" data-location="2,1"><span>6</span></div>
           <div class="cell" id="2-2" data-location="2,2"><span>5</span></div>
           <div class="cell" id="2-3" data-location="2,3"><span>4</span></div>   
        </div>

         <div class="board-row">
           <div class="cell" id="3-0" data-location="3,0"><span>3</span></div>
           <div class="cell" id="3-1" data-location="3,1"><span>2</span></div>
           <div class="cell" id="3-2" data-location="3,2"><span>1</span></div>
           <div class="cell" id="3-3" data-location="3,3"><span>9</span></div>   
        </div>
      </div>
    </div>
  </div>
 
 
</body>
</html>