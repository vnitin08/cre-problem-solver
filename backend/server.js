import e from 'express';
import express from 'express';
import odex from 'odex';
import path from 'path';
import cors from 'cors';



const app = express();

app.use(cors());
app.use(express.json());

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

// Define route for processing form submission
app.post('/calculate', (req, res) => {
  const result = performCalculations(req.body);
  res.json(result);
});

// Define route for API endpoint
app.post('/api/calculate', (req, res) => {
  const result = performCalculations(req.body);
//   console.log(req.body);
  res.json(result);
});

// app.post('/p2calculate', (req, res) => {
//     const result = p2Calculations(req.body);
//     res.json(result);
// });

// Function to perform calculations
function performCalculations(data) {
  const { a, b, c, d, fa0, fb0, fi0, x1, x2, v0, K } = data;
  let Vcsrt;
  let Vpfr;
  let y_values;

  if (fa0 / a <= fb0 / b) {
      const del = d / a + c / a - b / a - 1;
      const ep = (fa0 / (fa0 + fb0 + fi0)) * del;
      Vcsrt = (fa0 * (x2 - x1) * ((1 + ep * x2) ** (a + b))) / ((K * (fa0 / v0) ** (a + b)) * ((1 - x2) ** a) * ((fb0 / fa0) - (b * x2 / a)) ** b);

      function yprime(x, y) {
          return [((1 + ep * x) ** (a + b)) / (((1 - x) ** a) * ((fb0 / fa0) - (b * x / a)) ** b)];
      }

      const s = new odex.Solver(yprime, 1, { absoluteTolerance: 1e-10 });
      const f = s.integrate(x1, [0]); // Specify x2 as the second argument for integration range
      console.log(f);
      console.log(f[1]);
      console.log(Vpfr);

      Vpfr = f[1] * (fa0 / (K * (fa0 / v0) ** (a + b)));

      y_values = [];
      for (let X = 0; X <= 0.9; X += 0.1) {
          const Y = (fa0 * (1 + ep * X) ** (a + b)) / (K * ((fa0 / v0) ** (a + b)) * ((1 - X) ** a) * ((fb0 / fa0 - b * X / a) ** b));
          y_values.push([X, Y]);
      }
  } else {
      const del = d / b + c / b - a / b - 1;
      const ep = (fb0 / (fa0 + fb0 + fi0)) * del;
      Vcsrt = (fb0 * (x2 - x1) * ((1 + ep * x2) ** (a + b))) / ((K * (fb0 / v0) ** (a + b)) * ((1 - x2) ** b) * ((fa0 / fb0) - (a * x2 / b)) ** a);

      function yprime(x, y) {
          return [((1 + ep * x) ** (a + b)) / (((1 - x) ** b) * ((fa0 / fb0) - (a * x / b)) ** a)];
      }

      const s = new odex.Solver(yprime, 1, { absoluteTolerance: 1e-10 });
      const f = s.integrate(x1, [0]); // Specify x2 as the second argument for integration range
      Vpfr = f[1] * (fb0 / (K * (fb0 / v0) ** (a + b)));

      console.log(f);
      console.log(f[1]);
      console.log(Vpfr);

      y_values = [];
      for (let X = 0; X <= 0.9; X += 0.1) {
          const Y = (fb0 * (1 + ep * X) ** (a + b)) / (K * ((fb0 / v0) ** (a + b)) * ((1 - X) ** b) * ((fa0 / fb0 - a * X / b) ** a));
          y_values.push([X, Y]);
      }
  }

  return { Vcsrt, Vpfr, y_values };
}


// function p2Calculations(data) {
//     const { a, b, c, d, fa0, fb0, fi0, x1, x2, v0, K } = data;
//     const ep = ((fa0) / (fa0 + fb0 + fi0)) * (d / a + c / a - b / a - 1);
//     console.log(ep);

//     function yprime(x, y) {
//         return [((1 + ep * x) ** (a + b)) / (((1 - x) ** a) * ((fb0 / fa0) - b * x/ a) ** b)];
//     }

//     var s = new odex.Solver(yprime, 1, { absoluteTolerance: 1e-10 });
//     var f = s.integrate(x1,[0]);
//     const Vpfr = f(x2) * (fa0 / ((K * (fa0 / v0) ** (a + b))));


//     const Vcsrt = (fa0*(x2-x1)*((1+ep*x2)**(a+b)))/((K*(fa0/v0)**(a+b))*((1-x2)**a)*((fb0/fa0)-b*x2/a)**b);


//     return { Vcsrt, Vpfr};
// }

  



  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
