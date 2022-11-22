import React from 'react';
import workCard1 from '../../assets/svgs/workCard1.svg';
//import workCard2 from '../../assets/svgs/workCard2.svg'
//import workCard3 from '../../assets/svgs/workCard3.svg';
import '../../styles/home.css';
const HowItWorks = () => {
  return (
    <div className="container-fluid howItWorksContainer">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="howItWorksTitle">How It Works</h1>
          </div>
          <div className="col-12 d-none d-md-block">
            <p className="howItWorksSubTitle">
              Cure your sexual issues in 3 easy steps
            </p>
          </div>

          <div className="col-12 d-block d-md-none">
            <p className="howItWorksSubTitle">
              Cure your sexual issues in <br />3 easy steps
            </p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3 workCard">
            <img src={workCard1} className="workCardImg" />
            <p className="workCardTitle">Choose your own sexologist</p>
            <p className="workCardText">
              Let us help you choose your sexologist or choose your own
              sexologist There are many variations of passages{' '}
            </p>
          </div>

          <div className="col-12 col-lg-3 workCard">
            <img src={workCard1} className="workCardImg"/>
            <p className="workCardTitle">Consult your sexologist</p>
            <p className="workCardText">
              Consult your sexologist from privacy of your home sexologist There
              are many variations of passages{' '}
            </p>
          </div>

          <div className="col-12 col-lg-3 workCard">
            <img src={workCard1} className="workCardImg" />
            <p className="workCardTitle">Follow a personalized treatment </p>
            <p className="workCardText">
              Consult your sexologist from privacy of your home sexologist There
              are many variations of passages{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

// <div className="col-12 col-md-4 col-lg-4">
//             <div className="my-3 card">
//               <img
//                 className="mx-3 mt-3 card-img-top"
//                 style={{ height: "5%", width: "20%" }}
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB3Zo9TBNhHMafKzV+RPmIRo0f8Rw06kIdTHSyapxciNFRwclEY2QUjDEuOKpRBzfBVQ0Ouql18msQnIBBzghiDIRSCKAG6v95vSPXFupx975t4Ze0d73e9d6n//f/vF9nQSOjo9lELIbDloVENouEHKqVl513miPfO/J9t+z3z87iTV2d1QVNWIiIiEiKiAbZbcQ/AWGgyNTMDO5EFRdaEIVUVeG6/NNJ6KVLxN2urrbaEYJFCzIoJB9HquMRiZizmItiQU8UIbWZTPaWVK/XJRBDbLlXP+/Jewe9KFCE5Af5469RmOClInC0/ivIdS6KCZvwuki7ooqaRtEqNzGRbRQxn1B+MaSWZZEq2FjspAUj5EbmEyoQidT+hSI1ryA3ZyolMvORdkU5+V8UCKKjuGJsVDaOKyrtP1iQQ2xjUPliiO2WNYecCLlVrR9LCNf5Ut7nnAi59qyN49e+oOPVKEySH6U5QRKdJmiuaoMjf9Az8AsmYa+F3THv85wgic5lhORl9wTuPx8OdC5Ftnb8QGZyFrrwR0kJYpsjmwRC0jMwLYJGVEGLQTFNt7+h892Y7P+GLvxRivNNotOMCFw8sUEVlgUlbWc3q23DwWoc2LVa7XtiuG07sxl7t6+CZjgmSymXGxvL0tlsRKS1Y0hEZfCkZUdBgVklGUWKaThUAwOka2qsOkt3F4fVb8+2VYv+TgdsaJlDSWikWIFNinFJModshITtDHPC48DuNWhv3j73ufNtBvdeDONY/Vq0nNoI00hNq4+L5dWLS4SCSe8XlB+B+yJmfHIGj6Rx/dg3hbvnt2Dr+hUwSMLSZQjzse9Cr4iuERFxZQgU81AiaFCUwxyyYRja+t3zW6UxncHJNkc1xIawA0+SRIV59LTVxro1Vbj0YFBFzAQlE0RY1Wgae7atVO3Szcc/oZuSCiIUxUidPVqnzOJk29ccY4kKBTkoA1fExi+eWK8aW69LpAFlCmmUCd1mIc2PE5PuQjfKiE6z4IoGI6RtKSMs+WYRYZTrsOuTQgnhwO7Z+zTe905hfDp3kMcokQ99k8o0QpCKc8JOegvMI+NzcP4x0brVMRFQaLKMUsvpUP0+h1rUAE/yqD3KEDwIjMylB9+VGDpcyAgUI8U37y/qhGGuPhpSFk2rNiCGQbnDrRLEeS0uCcIQdC5aMsXQqg3Q5c11x70jsr55Q6pdEhphnrz8PC5DiFk11DAkBlzC9PbnstJElFi1KIYTJVdObYIhHP96bP5UcFL37KlpJHd2+lchcnyTUfKSaynAsuYvqSy75ZTlv+DlsVSXJBcc4PECufAcKgyWqdhK+LJb1l92D14EmlPgD7HelsPSec+FDGA+wjy8VJJoyegzJa8b/vXTIER5vKxJukqX+bAfNBJWiIeOBwApqJlPMiJ81Jjw7I91hhXiEVmQH+8RTfavJHL1csiWre0/hzMzsknLcbpVl+5HNP8CxCkT3kYD3EIAAAAASUVORK5CYII="
//               />
//               <div className="mt-2 card-body">
//                 <h5 className="card-title">Choose your own sexologist</h5>
//                 <p>
//                   Let us help you choose your sexologist or choose your own
//                   sexologist There are many variations of passages of Lorem
//                   Ipsum available{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
