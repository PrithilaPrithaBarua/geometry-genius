//Calculating parallelogram area\

function calculateParallelogramArea(){

    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base =parseFloat(parallelogramBaseText);
    console.log(base);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height =parseFloat(parallelogramHeightText);
    console.log(height);

    const parallelogramArea = base * height;
    console.log('Area of the Parallelogram is ', parallelogramArea);


    //display triangle area
    const parallelogramAreaSpan =document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText =parallelogramArea;
}

//Calculating rhombus area

function calculateRhombusArea(){

    const rhombusBaseInput = document.getElementById('rhombus-base');
    const rhombusBaseText = rhombusBaseInput.value;
    const base =parseFloat(rhombusBaseText);
    console.log(base);

    const rhombusHeightInput = document.getElementById('rhombus-height');
    const rhombusHeightText = rhombusHeightInput.value;
    const height =parseFloat(rhombusHeightText);
    console.log(height);

    const rhombusArea = base * height;
    console.log('Area of the Rhombus is ', rhombusArea);


    //display triangle area
    const rhombusAreaSpan =document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText =rhombusArea;
    
}

//Calculating pentagon area

function calculatePentagonArea(){

    const pentagonApothemInput = document.getElementById('pentagon-apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const apothem =parseFloat(pentagonApothemText);
    console.log(apothem);

    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const perimeter =parseFloat(pentagonPerimeterText);
    console.log(perimeter);

    const pentagonArea = 0.5 * apothem * perimeter;
    console.log('Area of the Pentagon is ', pentagonArea);


    //display triangle area
    const pentagonAreaSpan =document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText =pentagonArea;
    
}

//Calculating ellipse area

function calculateEllipseArea(){

    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText = ellipseAInput.value;
    const a =parseFloat(ellipseAText);
    console.log(a);

    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText = ellipseBInput.value;
    const b =parseFloat(ellipseBText);
    console.log(b);

    const ellipseArea = 3.1416 * a * b;
    console.log('Area of the Rectangle is ', ellipseArea);


    //display triangle area
    const ellipseAreaSpan =document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = ellipseArea;
    
}