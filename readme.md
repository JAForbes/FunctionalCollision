Functional Collision Detection
==============================

_Note: A work in progress.  Not ready to actually use!_

A lot of Javascript libraries have a "Vector class".  ThreeJS, LeafletJS etc
And because they are all instances with private internal state, it is impossible
to compose vector functions from differing libraries together.

In my view, these functions should accept an input and return an output.

I've chosen to format vectors as arrays, so that it is simple to make use of
other utility libraries, such as Underscore or Ramda.

Goals
-----

- No classes, or instances, or private variables
- 100% Stateless (Pure functions)
- Unit Tests
- Atomic examples that only include _relevant_ code
- Implement all the interactive examples found in the [Metanet Software collision detection articles](http://www.metanetsoftware.com/technique/tutorialA.html#appendixA)

####References####

- [Metanet Software - Separating Axis Theorem](http://www.metanetsoftware.com/technique/tutorialA.html#appendixA)
- [ViTutor Vector Projection](http://www.vitutor.com/geometry/vec/vector_projection.html)
- [Nipissing University - Vectors Tutorial](http://algebra.nipissingu.ca/tutorials/vectors.html)
