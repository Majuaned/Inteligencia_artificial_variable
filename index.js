const model = tf.sequential();

async function entrenar(repeticiones) {
    let x = document.getElementById("x").value;

    // Create a simple model.
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    console.log(x)
    
    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    
    // Generate some synthetic data for training. (y = 2x - 1)
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
    
    // Train the model using the data.
    await model.fit(xs, ys, {epochs: x});
    
    //console.log(repeticiones)
    
    //console.log(model.predict(tf.tensor2d([20],[1,1])).dataSync())
    
    // document.getElementById('micro-out-div').innerText =
    // model.predict(tf.tensor2d([20], [1, 1])).dataSync();
    // 
}


function predecir() {
    let x2 = parseInt(document.getElementById("x2").value);

    document.getElementById('micro-out-div').innerText =
    model.predict(tf.tensor2d([x2], [1, 1])).dataSync();
};