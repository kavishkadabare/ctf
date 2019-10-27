import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagValidatorService {

  constructor() { }

  flagcheck(level: number, flag: string) {

    if (level === 1 && flag === 'Typical_R1dd|er_3X7aBwASv9') { return true; } else
    if (level === 2 && flag === 'Pu5zl3d?_G00d_J0b_L76KYh7Jxy') { return true; } else
    if (level === 3 && flag === ':OGod_0f_M1||10N_F4ces?_r77QAjEHev') { return true; } else
    if (level === 4 && flag === 'SOlid_work!!_Easy_part\'s_over_1zZ5CLTLgq') { return true; } else
    if (level === 5 && flag === '1side_is_Kr4Zi_i3KaPMwCAL') { return true; } else
    if (level === 6 && flag === '0th3r-5id3_Crazier!_HWz3xELbBR') { return true; } else
    if (level === 7 && flag === 'W1nter_1z_Comin9_SlfDxHfA3i') { return true; } else
    if (level === 8 && flag === 'Why\'d_Arya_have_to_do_that_ahw7Ic4liH') { return true; } else
    if (level === 9 && flag === 'P3NGU1N_15_R1CH_2hK1HV5Vzj') { return true; } else
    if (level === 10 && flag === 'death_stroke:D_pn4Qax5C4R') { return true; } else
    if (level === 11 && flag === '2_many_2_H4ndl3_iF2fTpJrov') { return true; } else
    if (level === 12 && flag === 'Ra\'s_al_Ghul!XD_vUu5aJE0jE') { return true; } else
    if (level === 13 && flag === 'The_Gr34te5t_Detective_Jg8pkLgjKU') { return true; } else
    if (level === 14 && flag === 'Whatcha_Doin\'_Batsy!!:D_UqpAnL9FUD') { return true; } else
    if (level === 15 && flag === 'HAAHAHAHAHAHAHAHAXD_EvOltCsnUp') { return true; } else
    if (level === 16 && flag === 'Surprise!!!_KRXZY4daWin') { return true; } else { return false; }

  }
}
