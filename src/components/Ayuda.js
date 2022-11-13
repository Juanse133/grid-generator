import React from "react";
import help from "../assets/help.png";
import "../styles/components/Ayuda.css";

const Ayuda = () => {
    return (
        <div id="ayuda" className="ayuda-container">
            <h1>Ayuda</h1>
            <img src={help} alt="Ayuda"></img>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                rhoncus nulla nulla, ut aliquam ante imperdiet sed. Phasellus
                ornare felis sit amet mauris feugiat, nec maximus justo
                volutpat. Phasellus vestibulum, magna sollicitudin convallis
                elementum, ligula lectus pellentesque magna, at pharetra velit
                nisl at nibh. Mauris sit amet lectus sit amet tellus bibendum
                consequat. Suspendisse non malesuada risus. Aenean facilisis
                magna eu sapien euismod elementum. Quisque sollicitudin ornare
                mauris, vitae vulputate nunc. Donec et ornare augue, in vehicula
                eros. Sed non massa lectus. Pellentesque sagittis orci a risus
                sodales fringilla vitae at eros. Donec viverra tellus orci, a
                convallis ante efficitur vel. Nam lobortis lobortis aliquet.
                Aliquam erat volutpat. Sed lobortis dui vel arcu lobortis, vel
                mollis mauris euismod. Cras posuere felis eu semper venenatis.
                Fusce dolor orci, faucibus non nulla a, laoreet vulputate enim.
                Duis vitae justo vitae velit cursus sodales. Praesent tempus
                risus eu nibh luctus volutpat. Curabitur leo est, placerat et
                viverra sed, suscipit vitae diam. Phasellus et nulla quam.
                Aenean vitae egestas lectus. Nam ultricies leo nec ultrices
                venenatis. Donec lacinia lacus mauris, cursus feugiat tortor
                mattis at. Aliquam vitae iaculis augue, nec imperdiet nunc.
                Suspendisse potenti. Suspendisse leo odio, imperdiet id
                imperdiet in, scelerisque eget odio. Quisque et justo felis. Sed
                accumsan, ipsum vitae vehicula ornare, nisl tortor suscipit
                libero, quis congue neque purus vel diam. In varius aliquam
                erat, sed tristique neque lacinia elementum. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Proin cursus imperdiet sodales. Praesent
                efficitur vehicula aliquet. Vestibulum pellentesque, lectus eu
                sodales volutpat, dui mi ultricies ante, venenatis tincidunt
                augue enim non mauris. Duis in suscipit ipsum. Integer nec
                tempor lectus, in tempor dui. Aenean nec enim scelerisque,
                cursus tortor eget, ultrices odio. Suspendisse tincidunt, leo ac
                ultricies molestie, ligula nisi consectetur urna, vitae
                facilisis elit justo et nunc. Etiam blandit lobortis lacus
                lobortis lobortis. Phasellus pretium imperdiet arcu ut lobortis.
                Suspendisse non ornare leo. Phasellus tincidunt facilisis massa,
                in lacinia neque tempus et. Quisque sollicitudin sagittis
                tellus, non maximus arcu iaculis sit amet. Mauris sit amet ipsum
                quis sem iaculis commodo. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
            </p>
        </div>
    );
};

export default Ayuda;
