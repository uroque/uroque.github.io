import './ProjectsList.css';

function ProjectsList() {
    // const track = document.getElementById('image-track')

    // if (track.dataset.mouseDownAt === '0') return;
      
    // window.onmousedown = e => {
    //   track.dataset.mouseDownAt = e.clientX;
    // }

    // window.onmousemove = e => {
    //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    //     maxDelta = window.innerWidth / 2;
      
    //   const percentage = (mouseDelta / maxDelta) * -100,
    //   nextPercentage = parseFloat(track.dataset.pervPercentage + percentage);
    //   window.dataset.percentage = nextPercentage;

    //   track.animate({
    //     transform: `translate(${nextPercentage}%, -50%)`
    //   }, { duration: 1200, fill: 'forwards' });

    //   for (const image of track.getElementsByClassName('project-image')) {
    //     image.animate({
    //       objectPosition: `${nextPercentage + 100}% center`
    //   }, { duration: 1200, fill: 'forwards' });
    //   }
    // }
    // window.onmouseup = () => {
    //   track.dataset.mouseDownAt = '0';
    //   track.dataset.pervPercentage = track.dataset.percentage;
    // }

  return (
    <main>
      <div id='image-track' data-mouse-down-at='0' data-prev-percentage='0'>
        <img className='project-image' src='https://images.unsplash.com/photo-1690983177757-9ef05b356694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80' draggable='false'></img>

        <img className='project-image' src='https://images.unsplash.com/photo-1690983177757-9ef05b356694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80' draggable='false'></img>

        <img className='project-image' src='https://images.unsplash.com/photo-1690983177757-9ef05b356694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80' draggable='false'></img>

        <img className='project-image' src='https://images.unsplash.com/photo-1690983177757-9ef05b356694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80' draggable='false'></img>

        <img className='project-image' src='https://images.unsplash.com/photo-1690983177757-9ef05b356694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80' draggable='false'></img>

        <img className='project-image' src='https://images.unsplash.com/photo-1690983177757-9ef05b356694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80' draggable='false'></img>
      </div>
    </main>
  )
}

export default ProjectsList;
