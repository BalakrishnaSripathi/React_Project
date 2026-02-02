import "./tailwind.css"

export default function TailwindDemo(){
    
    return(
        <div>
            <div className="flex bg-pink-500 items-center justify-between px-20 py-10" >
                <h2 className="text-xl font-bold">DMANTZ Technologies</h2>
                <div className="flex gap-10">
                    <h4 className="text-xl text-white font-bold">Home</h4>
                    <h4 className="text-xl text-white font-bold">About</h4>
                    <h4 className="text-xl text-white font-bold">Contact</h4>


                </div>
            </div>
            <button className="btn">save</button>
            <div className="flex flex-row gap-10">
                <div className="h-20  w-20 bg-red-300 basics-2/3">01</div>
                 <div className="h-20  w-20 bg-red-400">02</div>
                <div className="h-20  w-20 bg-red-500">03</div>
                <div className="h-20  w-20 bg-red-600">04</div>
                 <div className="h-20  w-20 bg-red-700">05</div>
            </div>

            <span class="inline-grid grid-cols-3 gap-4">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                </span>
            <h2 className="text-decoration-underline">Float & clear </h2>
            <article>
                <img  className="float-left max-h-40" src="/images/image.png" alt="not fund" />
                <p className="clear-both" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut quod? Aliquam reiciendis veniam, excepturi minima quo numquam a est hic neque? Error eos consequuntur blanditiis nihil amet qui quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde cupiditate libero quo. Esse cumque repudiandae numquam animi a aut nam dicta expedita dolores eum, ut similique quia aliquam modi sequi?</p>
            </article>

            <h2 className="text-decoration-underline">object-fit</h2>
            <div className="flex gap-2">
                <div>
                object-contain
                <img className="h-30 w-30 object-contain" src="/images/image.png" alt="" />
                </div>
                <div>
                    object-none
                <img className="h-30 w-30 object-none" src="/images/image.png" alt="" />
              
                </div>
                <div>
                    object-fill
                <img className="h-30 w-30 object-fill" src="/images/image.png" alt="" />
                </div>
                </div>
            <h2 className="text-decoration-underline">flex-direction</h2>
            flex-row-reverse
            <div>
                <div className="flex flex-row-reverse gap-0.5">
                <div className="h-10 w-10 rounded-md bg-amber-500"></div>
                <div className="h-10 w-10 rounded-md bg-amber-500"></div>
                <div className="h-10 w-10 rounded-md bg-amber-500"></div>
                <div className="h-10 w-10 rounded-md bg-amber-500"></div>
                <div className="h-10 w-10 rounded-md bg-amber-500"></div>
                <div className="h-10 w-10 rounded-md bg-amber-500"></div>
            </div>
            </div>
     
     

        </div>
    )
}