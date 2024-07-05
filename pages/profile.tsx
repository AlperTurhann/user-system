import React from "react";
import AlertRB, { AlertContents, useAlert } from "@/components/AlertRB";
import EditForm from "@/components/Forms/EditForm";

const ProfilePage = () => {
  const { showAlert, alertContent, openAlert, closeAlert } = useAlert();

  const handleAlert = (alertData: AlertContents) => openAlert(alertData);

  return (
    <>
      <div className="min-h-screen flex">
        <EditForm handleAlert={handleAlert} />
        <div className="w-2/3 p-5">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            corrupti laborum quod numquam, id nihil sit minima facere eveniet
            natus. Magni, reprehenderit. Dicta vero saepe iure corporis quos et
            asperiores, mollitia vitae doloremque quod ipsam dolorum cum rerum
            qui. Architecto debitis excepturi voluptatum pariatur commodi
            magnam! Placeat consectetur iste rem quos officiis, dolore molestias
            obcaecati facilis, mollitia, exercitationem nulla aut excepturi
            nihil accusamus quisquam in modi similique perspiciatis. Inventore
            doloremque culpa blanditiis optio, quos consequuntur natus eaque.
            Blanditiis eos cumque quidem. Voluptatum rerum nihil reiciendis
            velit repellendus, praesentium iste totam, quos earum molestiae amet
            corporis aut nobis modi quasi necessitatibus? Repellendus, dolore
            exercitationem. Laboriosam fuga sint consectetur est iusto
            asperiores illo rerum harum beatae explicabo tenetur quam architecto
            cumque eveniet, tempore dolorem aspernatur commodi officiis libero
            repellat sit dicta, illum nam mollitia. Magni, amet dignissimos
            voluptatibus harum rerum iste? Dolores sint dolor assumenda amet
            nostrum, ex necessitatibus. Veritatis placeat perferendis possimus
            nemo voluptas eligendi reprehenderit quibusdam tempora quaerat
            necessitatibus, numquam ratione, minus doloremque maiores qui
            obcaecati culpa aspernatur reiciendis blanditiis molestias adipisci
            harum ea iusto! Commodi, ut adipisci? Dolor quibusdam culpa
            voluptates doloribus voluptatibus expedita commodi? Minima earum
            maiores itaque ratione obcaecati corporis eius inventore quas porro
            rem odit omnis tempora molestias, tempore ea nostrum quae doloribus
            mollitia, dolore veniam voluptatum? Atque, id. Amet, voluptatem
            vero! Maxime sint distinctio nihil nobis? Veniam, voluptas beatae?
            Suscipit optio in labore repellendus voluptas deserunt eveniet
            ratione recusandae soluta magni molestias, sed animi earum
            inventore? Nihil ducimus consequuntur autem earum, repudiandae in.
            Eaque ut quos, doloribus quidem id illo sed odio facilis deserunt
            labore dicta illum veniam minus, eius vel explicabo, velit repellat.
            Perferendis sunt consequatur molestias aliquam vel quia ipsam optio
            officiis animi hic ut, quis rerum totam provident expedita molestiae
            tempore nobis temporibus vero sint quidem cum ea dicta natus!
            Consequuntur, repellendus.
          </p>
        </div>
      </div>
      <AlertRB
        title={alertContent.title}
        description={alertContent.description}
        isOpen={showAlert}
        handleClose={closeAlert}
      />
    </>
  );
};

export default ProfilePage;
