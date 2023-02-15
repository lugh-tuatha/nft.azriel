import { useState } from 'react'
import './team-card.css'

function TeamCards() {
  return (
    <div>
      <section id="team">
      <div class="container my-3 py-5 text-center">
        <div class="row mb-5">
          <div class="col">
            <h1>Our Team</h1>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              excepturi recusandae, magnam laudantium quam voluptatem! Quos in
              totam atque est.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <img
                  src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
                  alt="member image"
                  class="img-fluid rounded-circle w-50 mb-3"
                />
                <h3>Ace Gabriel Pasiliao</h3>
                <h5>Leader</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, placeat!
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <img
                  src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
                  alt="member image"
                  class="img-fluid rounded-circle w-50 mb-3"
                />
                <h3>Jommel Toledo</h3>
                <h5>Member</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, placeat!
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <img
                  src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
                  alt="member image"
                  class="img-fluid rounded-circle w-50 mb-3"
                />
                <h3>Glory Mae Bandiala</h3>
                <h5>Member</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, placeat!
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TeamCards;