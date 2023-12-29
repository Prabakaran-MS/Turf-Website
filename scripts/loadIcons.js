let socialIconsParagraph = document.getElementById("addicons");

function addSocialIcons() {
    // Select the existing paragraph element where social icons will be added

    // Add social media icons with links
    let instagramIcon = createSocialIcon("https://www.instagram.com/sivasportshub?utm_source=qr&igsh=YjE5NDMyY2FhOQ==", "bi-instagram");
    let twitterIcon = createSocialIcon("https://x.com/Siva_Sports_Hub?t=Sdt8wQr-ezfdxOwKgL9vhg&s=08", "bi-twitter");
    let facebookIcon = createSocialIcon("https://www.facebook.com/profile.php?id=61554768911777&mibextid=ZbWKwL", "bi-facebook");

    // Append icons to the existing paragraph element
    socialIconsParagraph.appendChild(instagramIcon);
    socialIconsParagraph.appendChild(twitterIcon);
    socialIconsParagraph.appendChild(facebookIcon);
}

function createSocialIcon(link, iconClass) {
    // Create an anchor element for the social media icon
    let socialIcon = document.createElement("a");
    socialIcon.href = link;
    socialIcon.className = "text-white fs-3 mx-1";
    socialIcon.target = "_blank";

    // Create an icon element
    let iconElement = document.createElement("i");
    iconElement.className = "bi " + iconClass;

    // Append the icon to the anchor element
    socialIcon.appendChild(iconElement);

    return socialIcon;
}

// Call the function to add social media icons
addSocialIcons();
